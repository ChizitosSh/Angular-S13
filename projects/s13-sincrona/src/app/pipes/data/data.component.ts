import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  //
  constructor(private formBuilder: FormBuilder){}

  formPipes = this.formBuilder.group({
    valor: ['', {validators: [Validators.pattern('^[A-Z a-z]+$')]}],
  });

  get valor(){ return this.formPipes.get('valor'); }
  
  //
  
  title: string = 'uso de pipes';
  upperCase!: string;
  currency!: number;

  currencyArray = ['USD', 'EUR', 'CAD', 'PEN'];

  selectedCurrency!: string;

  currencyTable = [
    {
      selectedCurrency : this.selectedCurrency,
      currency : this.currency,
    }
  ]

  currencyTableAdd = {};

  enviar() {
    this.currencyTableAdd = this.currencyTable.push();
    console.log(this.currencyTable)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
