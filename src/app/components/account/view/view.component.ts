import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/model/accounts.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  accounts: Accounts = new Accounts('', '', '');
  acctList: Accounts[] = [
    { id:1, name:'Habib', email:"habib@gmail.com"},
    { id:2, name:'Altaf', email:"altaf@gmail.com"},
    { id:3, name:'Suvin', email:"suvin@gmail.com"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  delete(crud, i): void {
    this.acctList.splice(i, 1);
    console.log(crud);
  }

}
