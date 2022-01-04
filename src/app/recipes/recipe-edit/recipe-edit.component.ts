import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  editMode: boolean = false;
  recipeName: string;
  subscription: Subscription;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      if (params.name) {
        this.editMode = true;
        this.recipeName = params.name;
      }
      this.initForm();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.recipeForm);
    const newRecipe = new Recipe(this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['/recipes', this.recipeForm.value['name']]);
  }

  onCancelEdit() {
    // if (this.editMode) {
    //   this.router.navigate(['/recipes', this.recipeForm.value['name']]);
    // } else {
    //   this.router.navigate(['/recipes']);
    this.router.navigate(['../'], { relativeTo: this.route });
    // }
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  private initForm() {
    let recipeName = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByName(this.recipeName);
      recipeName = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      if (recipe.ingredients) {
        recipe.ingredients.forEach(ingredient => {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }));
        })
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'ingredients': ingredients
    })
  }

}
