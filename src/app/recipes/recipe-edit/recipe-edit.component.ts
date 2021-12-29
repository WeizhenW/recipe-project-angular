import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  editMode: boolean = false;
  recipeName: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      if (params.name) {
        this.editMode = true;
        this.recipeName = params.name;
      }
    })
    console.log(this.editMode, this.recipeName);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
