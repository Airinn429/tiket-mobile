import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  menuOutline,
  notificationsOutline,
  homeOutline,
  compassOutline,
  ticketOutline,
  personOutline,
  locationOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonLabel,
    RouterLink
  ],
})
export class ProfilePage {

  constructor() {
    addIcons({
      menuOutline,
      notificationsOutline,
      homeOutline,
      compassOutline,
      ticketOutline,
      personOutline,
      locationOutline
    });
  }

}