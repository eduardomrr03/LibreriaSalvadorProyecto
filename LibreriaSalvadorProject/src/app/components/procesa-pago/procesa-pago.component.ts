import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-procesa-pago',
  templateUrl: './procesa-pago.component.html',
  styleUrls: ['./procesa-pago.component.css']
})
export class ProcesaPagoComponent implements OnInit {
  constructor() { }
  handler: any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NJsfSB4JgQm88iHITt4jOmpdh7ZjnxbGY3NxZahIHb4UrrZZbu8JWvBOuUZd1qakc9fUiFZt3MitOWpwTh1nu5h00xzQtwiuR',
      locale: 'auto',
      token: function (token: any) {
        console.log(token)
        alert('Pago realizado correctamente');
      }
    });

    handler.open({
      name: 'Ingrese los siguientes datos',
      amount: amount * 100
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NJsfSB4JgQm88iHITt4jOmpdh7ZjnxbGY3NxZahIHb4UrrZZbu8JWvBOuUZd1qakc9fUiFZt3MitOWpwTh1nu5h00xzQtwiuR',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Pago realizado');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}
