import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Admin</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Panel manajemen event (admin).</p>
    </ion-content>
  `,
  standalone: true,
  styles: [``],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class AdminPage {}
