import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredient[] = [
    new Ingredient('flour', 100),
    new Ingredient('egg', 5),
    new Ingredient('chocolate', 200)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
