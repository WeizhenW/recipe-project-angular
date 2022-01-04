import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      if (params.name) {
        this.editMode = true;
        this.recipeName = params.name;
        this.initForm();
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
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
      'name': new FormControl(recipeName),
      'description': new FormControl(description),
      'imagePath': new FormControl(imagePath),
      'ingredients': ingredients,
    })
  }

}
