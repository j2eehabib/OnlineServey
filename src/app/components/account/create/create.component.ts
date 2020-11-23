import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/model/accounts.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  accounts: Accounts = new Accounts('', '', '');
  accList: Accounts[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  save(): void {
    const pro = new Accounts(this.accounts.id, this.accounts.name, this.accounts.email);
    this.accList.push(pro);
    console.log(this.accList);
  }

}
