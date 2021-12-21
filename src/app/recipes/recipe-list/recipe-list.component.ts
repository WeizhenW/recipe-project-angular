import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesList: Recipe[] = [
    new Recipe('Gateau Basque', 'Nice and yummy!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS118QoFEfvkBQKqIxmQoDRrf1N6TU3_rRjQ&usqp=CAU'),
    new Recipe('Souffle', 'Delicious Chocolate Souffles', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JHE5JZzI-V3Z6nIrvuWdux0_HPV-k9sMJRnKHhOz4cFBzqdptZ5ScgSpPJ5BH-itehk&usqp=CAU'),
    new Recipe('Mont Blanc', 'My favorite French Dessert', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OZQULtZWIwQz6qB6Snlp25KXY3L0j2SyIQ&usqp=CAU')

  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelected.emit(recipeSelected);
  }

}
