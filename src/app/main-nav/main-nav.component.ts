import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  public navItems = [
    {
      children: [{ children: 'null', url: 'login', name: 'Ulala' }],
      url: '/login',
      name: 'Login',
    },
    { children: 'null', url: '/register', name: 'Register' },
    { children: 'null', url: '/home', name: 'Home' },
  ];
  isLoading = false;
  dataLoaded = false;
  @Input() data: any[] = [];
  @Input() trigger = 'Trigger';
  @Input() isRootNode = false;

  public navitemTest = [
    {
      menuId: 0,
      name: 'Home',
      url: '/home',
      icon: 'icon-home',
      children: null,
    },
    {
      menuId: 9,
      name: 'Merchant Administration',
      url: '/merchant',
      icon: 'fa fa-bank',
      children: [
        {
          menuId: 7,
          name: 'Merchant Registration',
          url: '/merchant/merchant-registration',
          icon: null,
          children: null,
        },
        {
          menuId: 8,
          name: 'Merchant Activation',
          url: '/merchant/merchant-activation',
          icon: null,
          children: null,
        },
        {
          menuId: 10,
          name: 'Merchant',
          url: '/merchant/list-merchant',
          icon: null,
          children: null,
        },
        {
          menuId: 11,
          name: 'Merchant & Sub-Merchant',
          url: '/merchant/sub-merchant',
          icon: null,
          children: null,
        },
        {
          menuId: 12,
          name: 'E-VAS Admin & User',
          url: '/adminuser/list-admin-user',
          icon: null,
          children: null,
        },
        {
          menuId: 13,
          name: 'Merchant Access Group',
          url: '/merchant-access-group/list-merchant-access',
          icon: null,
          children: null,
        },
      ],
    },
    {
      menuId: 25,
      name: 'Status Activity',
      url: '/statusdata',
      icon: 'fa fa-list-alt',
      children: [
        {
          menuId: 26,
          name: 'E-VAS Admin Instruction Status',
          url: '/statusdata/admin-instruction-status',
          icon: null,
          children: null,
        },
        {
          menuId: 28,
          name: 'E-VAS User Transaction Status',
          url: '/statusdata/user-transaction-status',
          icon: null,
          children: null,
        },
        {
          menuId: 29,
          name: 'E-VAS Activity History',
          url: '/statusdata/status-log-activity',
          icon: null,
          children: null,
        },
        {
          menuId: 30,
          name: 'Error Code',
          url: '/statusdata/evas-error-code',
          icon: null,
          children: null,
        },
      ],
    },
    {
      menuId: 65,
      name: 'My Data',
      url: '/my-data',
      icon: 'fa fa-address-card-o',
      children: [
        {
          menuId: 67,
          name: 'My Profile',
          url: '/my-data/my-profile',
          icon: null,
          children: null,
        },
        {
          menuId: 68,
          name: 'My Log Activity',
          url: '/my-data/my-log-activity',
          icon: null,
          children: null,
        },
      ],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  database: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticationService,
    private router: Router) {}

  // tslint:disable-next-line:use-lifecycle-interface
  // ngOnInit(): void {
  //   this.getData();
  // }

  // tslint:disable-next-line:typedef
  showInfo() {
    alert('tes');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line:typedef
  onSideNavClose() {}

  // tslint:disable-next-line:typedef
  getData(node: string) {
    console.log('apa ini jalan');
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = this.navItems?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }
}
