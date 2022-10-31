import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description of a test recipe', 'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg'),
    new Recipe('B Test Recipe', 'Description of a test recipe', 'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg'),
    new Recipe('C Test Recipe', 'Description of a test recipe', 'https://momentmag.com/wp-content/uploads/2010/11/sweet-potatoe-latke.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(index: number) {
    this.recipeSelected.emit(this.recipes[index]);
  }
}
