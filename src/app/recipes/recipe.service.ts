import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
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

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipesList() {
        return this.recipesList;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeByName(recipeName: string) {
        return this.recipesList.find(recipe => recipe.name === recipeName);
    }

    addRecipe(recipe: Recipe) {
        this.recipesList.push(recipe);
    }

    updateRecipe(recipe: Recipe) {
        const name = recipe.name;
        const index = this.recipesList.findIndex(recipe => recipe.name===name);
        this.recipesList[index]=recipe;
    }

    deleteRecipe(recipe: Recipe) {
        const index = this.recipesList.findIndex(r => r.name === recipe.name);
        this.recipesList.splice(index,1);
    }

}