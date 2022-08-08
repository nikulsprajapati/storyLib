import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EditEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit,OnChanges {

  public gridData: any = [];

  @Input() inputDataArry : any = [];

  constructor() { }
 

  ngOnInit(): void {
    const data = localStorage.getItem('form') as string;
    this.gridData = [...JSON.parse(data)];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.gridData = [...this.inputDataArry];
  }

  public saveHandler(args: EditEvent): void {
    localStorage.setItem('form', JSON.stringify(this.gridData));
  }

  updateUser(){

  }
 

}
