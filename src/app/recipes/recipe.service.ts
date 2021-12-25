import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipesList: Recipe[] = [
        new Recipe('Gateau Basque', 
                    'Nice and yummy!', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS118QoFEfvkBQKqIxmQoDRrf1N6TU3_rRjQ&usqp=CAU',
                    [new Ingredient('milk', 100), new Ingredient('heavy cream', 200)]),
        new Recipe('Souffle', 
                    'Delicious Chocolate Souffles', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JHE5JZzI-V3Z6nIrvuWdux0_HPV-k9sMJRnKHhOz4cFBzqdptZ5ScgSpPJ5BH-itehk&usqp=CAU',
                    [new Ingredient('chocolate powder', 150), new Ingredient('large eggs', 5)]),
        new Recipe('Mont Blanc', 
                    'My favorite French Dessert', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OZQULtZWIwQz6qB6Snlp25KXY3L0j2SyIQ&usqp=CAU',
                    [new Ingredient('chestnut powder', 80)])

    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipesList() {
        return this.recipesList;
    }

}