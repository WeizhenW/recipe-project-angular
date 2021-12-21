import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project-angular';
  pageToShow = 'Recipe';

  onNavigate(event: string) {
    this.pageToShow = event;
  }
}
