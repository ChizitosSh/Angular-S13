import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  constructor(private formBuilder: FormBuilder){}

  formPipes = this.formBuilder.group({
    valor: ['', {validators: [Validators.pattern('^[A-Z a-z]+$')]}],
  });

  get valor(){ return this.formPipes.get('valor'); }



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


  ngOnInit(): void {
  }

}
