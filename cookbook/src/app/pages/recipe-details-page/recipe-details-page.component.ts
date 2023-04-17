import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {

  id: number
  constructor(route: ActivatedRoute) {
    console.log(route.snapshot.params)
    this.id = route.snapshot.params['id']
  }
}
