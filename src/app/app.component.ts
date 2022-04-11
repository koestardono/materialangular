import { Component } from '@angular/core';
import { DynamicDatabase } from '../app/components/menu/dinamicdatabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-login-template';
  initialData: string[] = [];

  constructor(private database: DynamicDatabase) {
    this.initialData = this.database.rootLevelNodes.slice();
  }
}
