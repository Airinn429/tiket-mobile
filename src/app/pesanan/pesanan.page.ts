import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { TicketService } from '../services/ticket'; 
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonInput,
  IonRadio,      
  IonRadioGroup
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  ellipsisVerticalOutline,
  qrCodeOutline,
  checkmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    CurrencyPipe,
    FormsModule, 
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    IonRadio,      
    IonRadioGroup  
  ]
})
export class PesananPage implements OnInit {

  // Nilai default/cadangan langsung diisi angka agar rincian tidak mungkin kosong
  ticketPrice: number = 800000; 
  serviceFee: number = 10000;
  discount: number = 0;

  eventName: string = 'Summer Music Festival';
  eventDate: string = 'Sat, 24 Aug 2024';
  
  voucherCode: string = '';
  isVoucherApplied: boolean = false;
  voucherErrorMessage: string = '';

  constructor(private router: Router, private ticketService: TicketService) {
    addIcons({
      arrowBackOutline,
      ellipsisVerticalOutline,
      qrCodeOutline,
      checkmarkOutline
    });
  }

  ngOnInit() {
    // Menjemput data belanja dari ticket.ts secara aman tanpa merusak datanya
    const dataDariDetail = this.ticketService.getCheckoutData();

    if (dataDariDetail) {
      // Mendeteksi segala kemungkinan nama variabel kuantitas harga dari halaman detail Anda
      this.ticketPrice = dataDariDetail.totalBayar || 
                         dataDariDetail.totalHarga || 
                         dataDariDetail.total || 
                         dataDariDetail.price || 
                         this.ticketPrice; 

      this.eventName = dataDariDetail.name || dataDariDetail.eventName || this.eventName;
      this.eventDate = dataDariDetail.date || dataDariDetail.eventDate || this.eventDate;
    }
    
    // Mengambil nilai service fee dari service
    this.serviceFee = this.ticketService.serviceFee || 10000;
  }

  applyVoucher() {
    if (this.voucherCode.trim().toUpperCase() === 'PROMO10K') {
      this.discount = 10000;
      this.isVoucherApplied = true;
      this.voucherErrorMessage = '';
    } else {
      this.discount = 0;
      this.isVoucherApplied = false;
      this.voucherErrorMessage = 'Kode voucher tidak valid!';
    }
  }

  get totalPayment(): number {
    return this.ticketPrice + this.serviceFee - this.discount;
  }

  simulateScanOrPay() {
    alert('Simulasi Pembayaran Berhasil! Mengalihkan ke halaman tiket...');
    this.router.navigate(['/detail']); 
  }
}