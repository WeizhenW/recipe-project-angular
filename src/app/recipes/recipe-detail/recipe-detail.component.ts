import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.route.params.subscribe((params: Params) => {
      this.recipeSelected = this.recipeService.getRecipeByName (params.name);
    })
  }

  onAddIngredient() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

}

