import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredientsList: Ingredient[] = [
        new Ingredient('flour', 100),
        new Ingredient('egg', 5),
        new Ingredient('chocolate', 200)
    ];

    startEditing = new Subject<Ingredient>();

    getIngredientsList() {
        return this.ingredientsList;
    }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredientsList.push(newIngredient);
    }

    updateIngredient(ingredient: Ingredient) {
        const index = this.ingredientsList.findIndex(ing => ing.name === ingredient.name);
        this.ingredientsList[index].amount = ingredient.amount;
    }

    addIngredients(ingredients: Ingredient[]) {
        // ingredients.forEach(ingredient => {
        //     this.ingredientsList.push(ingredient);
        // })
        this.ingredientsList.push(...ingredients);
    }

    deleteIngredient(ingredient: Ingredient) {
        const index = this.ingredientsList.findIndex(ing => ing.name === ingredient.name);
        this.ingredientsList.splice(index, 1);
    }
}