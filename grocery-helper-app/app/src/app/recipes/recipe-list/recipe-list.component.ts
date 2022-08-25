import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://www.kannammacooks.com/wp-content/uploads/Chicken-Biryani-Recipe-Tamil-Style-Easy-Bachelor-friendly-recipe-1-31.jpg'),
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://www.kannammacooks.com/wp-content/uploads/Chicken-Biryani-Recipe-Tamil-Style-Easy-Bachelor-friendly-recipe-1-31.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
