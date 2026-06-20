import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // Gunakan objek kosong {} sebagai nilai awal agar tidak undefined atau null
  checkoutData: any = {};
  
  // Biaya layanan tetap Rp10.000
  serviceFee: number = 10000; 

  selectedEvent: any = null;

  constructor() {}

  setSelectedEvent(event: any) {
    this.selectedEvent = event;
    console.log('Event terpilih disimpan:', event);
  }

  // KODE BARU: Fungsi untuk mengambil data event di halaman detail
  getSelectedEvent() {
    return this.selectedEvent;
  }

  // 1. Fungsi penampung data (Dipanggil oleh detail.page.ts)
  setCheckoutData(data: any) {
    // FIX: Menggabungkan data tanpa menghapus nilai jumlah tiket (quantity/count) yang lama
    this.checkoutData = { ...this.checkoutData, ...data };
    console.log('Data sukses disimpan via setCheckoutData:', this.checkoutData);
  }

  // 2. Mengambil data (Dicari oleh payment.page.ts baris 32)
  getCheckoutData() {
    return this.checkoutData;
  }

  // 3. Menyimpan data dari pesanan (Dicari oleh payment.page.ts baris 43)
  simpanKePesanan(data: any) {
    // FIX: Menggabungkan data secara aman agar state detail page tidak rusak
    this.checkoutData = { ...this.checkoutData, ...data };
    console.log('Data sukses disimpan via simpanKePesanan:', this.checkoutData);
  }
}