import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') shoppingForm: NgForm;
  subscription: Subscription;
  edit: boolean = false;
  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      data => {
        this.shoppingForm.setValue(data);
        this.edit = true;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem() {
    // this.shoppingListService.addNewIngredient(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
    const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount)

    if (!this.edit) {
      this.shoppingListService.addNewIngredient(ingredient);
    } else {
      this.shoppingListService.updateIngredient(ingredient);
    }

    this.shoppingForm.reset();
    this.edit = false;
  }

  onClearForm() {
    this.shoppingForm.reset();
    this.edit = false;
  }

  onDeleteItem() {
    const ingredient = this.shoppingForm.value;
    this.shoppingListService.deleteIngredient(ingredient);
    this.shoppingForm.reset();
    this.edit = false;
  }

}
