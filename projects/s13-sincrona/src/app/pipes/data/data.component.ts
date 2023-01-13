import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  title: string = 'uso de pipes';
  
  // Ejercicio 1

  constructor( private formBuilder: FormBuilder ) { }

  formUppercasePipe!: FormGroup; 

  initPipeForm(): FormGroup {
    return this.formBuilder.group({
      valor: ['', [Validators.required, Validators.pattern('^[A-Z a-z]+$')]],
    })
  }

  get valor() { return this.formUppercasePipe.get('valor'); };
  

  // Ejercicio 2

  formCurrencyPipe!: FormGroup;

  currencyArray = ['USD', 'EUR', 'CAD', 'PEN'];

  initCurrencyForm(): FormGroup {
    return this.formBuilder.group({
      currency: ['', [Validators.required, Validators.pattern('^[0-9.]*$')]],
      selectedCurrency: ['', [Validators.required]],
    })
  }
  
  get currency() { return this.formCurrencyPipe.get('currency'); };
  get selectedCurrency() { return this.formCurrencyPipe.get('selectedCurrency'); };

  ngOnInit(): void {
    this.formUppercasePipe = this.initPipeForm();
    this.formCurrencyPipe = this.initCurrencyForm();
  }

}
