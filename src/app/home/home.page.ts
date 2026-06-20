import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TicketService } from '../services/ticket'; // <-- 1. Import TicketService Anda

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonLabel,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonMenu,         
  IonMenuButton,   
  IonList,
  IonItem
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  menuOutline,
  notificationsOutline,
  home,
  homeOutline,
  compassOutline,
  ticketOutline,
  personOutline,
  bookOutline,
  gameControllerOutline,
  airplaneOutline,
  footballOutline,
  handLeftOutline,
  colorPaletteOutline,
  calendarOutline,
  heartOutline,
  flameOutline,
  sparklesOutline,
  giftOutline,
  searchOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonLabel,
    IonChip,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonMenu,         
    IonMenuButton,   
    IonList,
    IonItem
  ]
})
export class HomePage {

  // 2. Inject TicketService ke dalam constructor Anda
  constructor(private router: Router, private ticketService: TicketService) {
    addIcons({
      menuOutline,
      notificationsOutline,
      home,
      homeOutline,
      compassOutline,
      ticketOutline,
      personOutline,
      bookOutline,
      gameControllerOutline,
      airplaneOutline,
      footballOutline,
      handLeftOutline,
      colorPaletteOutline,
      calendarOutline,
      heartOutline,
      flameOutline,
      sparklesOutline,
      giftOutline,
      searchOutline
    });
  }

  // 3. Ubah fungsi perpindahan halaman agar menerima data event dinamis
  goToDetail(eventData?: any) {
    if (eventData) {
      // Menyimpan data event spesifik yang diklik (judul, tanggal, dll) ke service
      this.ticketService.setSelectedEvent(eventData);
    }
    this.router.navigate(['/detail']);
  }
}