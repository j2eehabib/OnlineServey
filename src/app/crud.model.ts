export class Crud {
    name: string;
    price: number;
    qty: number;
    gender: string;
    skill: object;
    area: string;
    constructor(name, price, qty, gender, skill, area) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.gender = gender;
        this.skill = skill;
        this.area = area;
    }
}