import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-new-page',
  templateUrl: './recipe-new-page.component.html',
  styleUrls: ['./recipe-new-page.component.css']
})
export class RecipeNewPageComponent {
  constructor(private router: Router, private recipesService: RecipesService) {
  }

  handleSubmit(event: Event) {
    event.preventDefault()
  }

  handleSave(){
    this.recipesService.add({
      name: 'xyz'
    })
     this.router.navigateByUrl('/rezepte')

  }

 handleCancel() {

    // TODO: Fix double redirect bug
     this.router.navigateByUrl('/rezepte')
  }
}
