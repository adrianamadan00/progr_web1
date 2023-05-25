import { Component } from '@angular/core';

@Component({
  selector: 'app-telefoane-mobile',
  templateUrl: './telefoane-mobile.component.html',
  styleUrls: ['./telefoane-mobile.component.css']
})
export class TelefoaneMobileComponent {
  telefoane = [
    {
      nume: 'iPhone 12',
      producator: 'Apple',
      an: 2020,
      descriere: 'Un telefon inteligent puternic, cu un ecran Super Retina XDR și un sistem de camere avansat.'
    },
    {
      nume: 'Samsung Galaxy S21',
      producator: 'Samsung',
      an: 2021,
      descriere: 'Un telefon Android de top, cu un ecran Dynamic AMOLED 2X și performanțe remarcabile.'
    },
    {
      nume: 'Google Pixel 5',
      producator: 'Google',
      an: 2020,
      descriere: 'Un telefon cu un aparat foto excepțional, cu capacitate ridicată de captare a detaliilor și cu funcții avansate de software.'
    }
  ];
}