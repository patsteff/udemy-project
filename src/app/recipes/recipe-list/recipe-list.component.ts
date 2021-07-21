import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/8283/7717719952_5377f33781_b.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/8283/7717719952_5377f33781_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
