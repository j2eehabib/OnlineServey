import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/model/accounts.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  mode = false;
  index = -1;
  accounts: Accounts = new Accounts('', '', '');
  acctList: Accounts[] = [
    { id: 1, name: 'Habib', email: "habib@gmail.com" },
    { id: 2, name: 'Altaf', email: "altaf@gmail.com" },
    { id: 3, name: 'Suvin', email: "suvin@gmail.com" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  edit(accounts, i): void {
    this.mode = true;
    this.index = i;
    this.accounts = new Accounts(accounts.id, accounts.name, accounts.email);
  }
}
