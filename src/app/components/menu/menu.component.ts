import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() data: string[] = [];
  @Input() trigger = 'Trigger';
  @Input() isRootNode = false;
  database: any;
  isLoading = false;
  dataLoaded = false;

  constructor() {}

  isExpandable(node: string): boolean {
    return this.database.isExpandable(node);
  }

  // tslint:disable-next-line:typedef
  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }

  ngOnInit(): void {}
}
