import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, 
  IonBackButton, IonTitle, IonButton, IonIcon, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, ellipsisVertical, qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, 
    IonButtons, IonBackButton, IonTitle, IonButton, IonIcon, IonFooter
  ]
})
export class PaymentPage implements OnInit {
  ticketData: any;

  constructor(private ticketService: TicketService, private router: Router) {
    addIcons({ arrowBack, ellipsisVertical, qrCodeOutline });
  }

  ngOnInit() {

  this.ticketData = this.ticketService.getCheckoutData();

  if (!this.ticketData) {
    this.router.navigate(['/home']);
  }

}
 
  bayarSekarang() {
    if (this.ticketData) {
      // 1. Simpan tiket ke dalam menu pesanan (array di service)
      this.ticketService.simpanKePesanan(this.ticketData);
      
      // 2. Alihkan langsung ke tampilan tiket digital sukses
      this.router.navigate(['/ticket-success']);
    }
  }
}