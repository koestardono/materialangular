import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDatabase } from '../app/components/menu/dinamicdatabase.service';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-login-template';
  initialData: string[] = [];

  constructor(
    private database: DynamicDatabase,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.initialData = this.database.rootLevelNodes.slice();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
