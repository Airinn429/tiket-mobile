import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Checkout</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Proses pembelian tiket.</p>
    </ion-content>
  `,
  standalone: true,
  styles: [``],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class CheckoutPage {}
