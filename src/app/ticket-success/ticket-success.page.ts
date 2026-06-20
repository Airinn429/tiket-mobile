import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 1. Tambahkan IonButtons, IonButton, dan IonIcon ke dalam import standalone
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
// 2. Import addIcons dan icon yang kamu gunakan agar muncul di aplikasi
import { addIcons } from 'ionicons';
import { arrowBack, ellipsisVertical, checkmarkCircle, calendarOutline, downloadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ticket-success',
  templateUrl: './ticket-success.page.html',
  styleUrls: ['./ticket-success.page.scss'],
  standalone: true,
  // 3. Daftarkan IonButtons, IonButton, dan IonIcon di sini
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    CommonModule, 
    FormsModule
  ]
})
export class TicketSuccessPage implements OnInit {
  // 4. Buat properti latestTicket agar tidak error TS2339 (bisa disesuaikan isinya nanti)
  latestTicket: any = null;

  constructor() {
    // 5. Daftarkan icon-icon yang dipakai di HTML kamu
    addIcons({ arrowBack, ellipsisVertical, checkmarkCircle, calendarOutline, downloadOutline });
  }

  ngOnInit() {
    // Contoh pengisian data dummy agar *ngIf="latestTicket" di HTML kamu terpenuhi
    this.latestTicket = {
      category: 'Tiket Bioskop',
      name: 'Doctor Strange in the Multiverse of Madness',
      holder: 'Nadia',
      section: 'Studio 1',
      seat: 'A-12, A-13'
    };
  }

  // 6. Buat fungsi selesai() yang dipanggil oleh (click) di HTML
  selesai() {
    console.log('Tombol selesai diklik!');
    // Tambahkan logic navigasi kamu di sini, misalnya kembali ke home
  }
}