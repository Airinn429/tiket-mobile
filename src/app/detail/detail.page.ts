import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TicketService } from '../services/ticket'; // Import service

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonButton, IonIcon, IonBadge, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  ellipsisVertical, star, calendarOutline, locationOutline,
  checkmarkCircle, checkmarkCircleOutline, navigateCircleOutline, arrowBack,
  removeOutline, addOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink, IonContent, IonHeader, 
    IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, 
    IonIcon, IonBadge, IonFooter
  ]
})
export class DetailPage implements OnInit {

  // 1. Data Event Utama (Dijadikan nilai default/cadangan)
  eventData = {
    name: 'Summer Music Festival',
    date: 'Sab, 24 Ags 2026',
    location: 'Central Park Stadium'
  };

  // 2. Properti Counter Tiket
  jumlahVip: number = 0;
  jumlahReguler: number = 0;
  hargaVip: number = 1200000;
  hargaReguler: number = 800000;

  constructor(private ticketService: TicketService, private router: Router) {
    addIcons({
      ellipsisVertical, star, calendarOutline, locationOutline,
      checkmarkCircle, checkmarkCircleOutline, navigateCircleOutline, arrowBack,
      removeOutline, addOutline 
    });
  }

  ngOnInit() {
  // Mengambil data event yang diklik dari beranda melalui service
  const eventDipilih = this.ticketService.getSelectedEvent();

  if (eventDipilih) {
    console.log('Data yang diterima detail dari beranda:', eventDipilih);

    // Pemetaan berlapis: membaca .title jika .name bawaan beranda ternyata kosong
    this.eventData.name = eventDipilih.title || eventDipilih.name || this.eventData.name;
    this.eventData.date = eventDipilih.date || this.eventData.date;
    
    // Membaca lokasi (jika di data beranda Anda ada properti tempat/lokasi)
    this.eventData.location = eventDipilih.location || eventDipilih.venue || this.eventData.location;

    this.hargaVip = eventDipilih.vipPrice || this.hargaVip;
    this.hargaReguler = eventDipilih.regPrice || this.hargaReguler;
  }
}

  // 3. Fungsi Pengubah Jumlah Tiket (Tombol + dan - tetap utuh & aman)
  ubahJumlah(jenis: 'vip' | 'reguler', aksi: 'tambah' | 'kurang') {
    if (jenis === 'vip') {
      if (aksi === 'tambah') this.jumlahVip++;
      if (aksi === 'kurang' && this.jumlahVip > 0) this.jumlahVip--;
      console.log('Jumlah VIP sekarang:', this.jumlahVip);
    } else {
      if (aksi === 'tambah') this.jumlahReguler++;
      if (aksi === 'kurang' && this.jumlahReguler > 0) this.jumlahReguler--;
      console.log('Jumlah Reguler sekarang:', this.jumlahReguler);
    }
  }

  // 4. Getter untuk menghitung total kuantitas tiket terpilih
  get totalTiket(): number {
    return this.jumlahVip + this.jumlahReguler;
  }

  // 5. Getter untuk menghitung total nominal harga keseluruhan
  get totalHarga(): number {
    return (this.jumlahVip * this.hargaVip) + (this.jumlahReguler * this.hargaReguler);
  }

  // 6. Fungsi saat tombol "Lanjutkan" di footer diklik
  goToCheckout() {
    if (this.totalTiket === 0) {
      alert('Silakan pilih minimal 1 tiket terlebih dahulu!');
      return;
    }

    const checkoutData = {
      name: this.eventData.name,
      date: this.eventData.date,
      location: this.eventData.location,
      detailTiket: [
        { kategori: 'Tiket VIP', jumlah: this.jumlahVip, harga: this.hargaVip },
        { kategori: 'Tiket Reguler', jumlah: this.jumlahReguler, harga: this.hargaReguler }
      ].filter(t => t.jumlah > 0),
      totalBayar: this.totalHarga
    };

    this.ticketService.setCheckoutData(checkoutData);
    this.router.navigate(['/payment']);
  }
}