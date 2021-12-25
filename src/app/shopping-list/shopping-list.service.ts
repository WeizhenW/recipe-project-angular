import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private  ingredientsList: Ingredient[] = [
        new Ingredient('flour', 100),
        new Ingredient('egg', 5),
        new Ingredient('chocolate', 200)
      ]
    
    getIngredientsList() {
        return this.ingredientsList;
    }
    
    addNewIngredient(newIngredient: Ingredient) {
        this.ingredientsList.push(newIngredient);
    }
}