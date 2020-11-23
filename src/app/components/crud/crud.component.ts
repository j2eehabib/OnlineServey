import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/crud.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  mode = false;
  index = -1;
  crud: Crud = new Crud('', '', '', '', '', '');
  crudList: Crud[] = [
    new Crud('Mouse', 200, 20, 'Male', 'Destop', 'Dhaka'),
    new Crud('Keyboard', 450, 20, 'Male', 'Destop', 'Gulsan'),
    new Crud('Monitor', 400, 20, 'Famale', 'Destop', 'Dhanmondi'),
  ];

  areaList: any[] = [
    { label: 'Dhaka', value: 'Dhaka' },
    { label: 'Gulsan', value: 'Gulsan' },
    { label: 'Dhanmondi', value: 'Dhanmondi' },
  ];

  skil = {
    desktop: 'Desktop',
    laptop: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveValue(): void {
    let skil = {
      desktop: (this.skil.desktop) ? 'Desktop' : '',
      laptop: (this.skil.laptop) ? 'Laptop' : '',
    }
    if (this.mode) {
      this.crudList[this.index].name = this.crud.name;
      this.crudList[this.index].price = this.crud.price;
      this.crudList[this.index].qty = this.crud.qty;
      this.crudList[this.index].gender = this.crud.gender;
      this.crudList[this.index].skill = this.crud.skill;
      this.crudList[this.index].area = this.crud.area;
    } else {
      const pdt = new Crud(this.crud.name, this.crud.price, this.crud.qty, this.crud.gender, this.crud.skill, this.crud.area);
      this.crudList.push(pdt);
      console.log(this.crudList);
    }

  }
  edit(crud, i): void {
    this.mode = true;
    this.index = i;
    this.crud = new Crud(crud.name, crud.price, crud.qty, crud.gender, crud.skill, crud.area);
  }

  delete(crud, i): void {
    this.crudList.splice(i, 1);
    console.log(crud);
  }

}
