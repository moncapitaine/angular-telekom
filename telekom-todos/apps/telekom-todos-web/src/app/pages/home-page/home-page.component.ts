import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'telekom-todos-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private router: Router) {}
  async navigate(path: string) {
    await this.router.navigateByUrl(path);
  }
}
