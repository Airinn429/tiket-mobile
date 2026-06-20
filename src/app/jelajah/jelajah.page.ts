import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TicketService } from '../services/ticket'; // Pastikan path service Anda benar

@Component({
  selector: 'app-jelajah',
  templateUrl: './jelajah.page.html',
  styleUrls: ['./jelajah.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class JelajahPage implements OnInit {
  
  // Penampung data event yang sinkron dengan Beranda
  daftarEvent: any[] = [];

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit() {
    // Array data master event yang sama dengan halaman Beranda
    this.daftarEvent = [
      { 
        title: 'Porsche Museum fest 2.8', 
        date: '13 Feb 2026', 
        location: 'Stuttgart Arena', 
        imgUrl: 'assets/shapes.svg', // Nanti bisa diganti url asli gambar
        minPrice: 'Rp 300.000',
        vipPrice: 1200000, 
        regPrice: 300000 
      },
      { 
        title: 'Under Wondering', 
        date: '15 Des 2026', 
        location: 'Hall Convex', 
        imgUrl: 'assets/shapes.svg',
        minPrice: 'Rp 150.000',
        vipPrice: 800000, 
        regPrice: 150000 
      },
      { 
        title: 'The Sounds Project Vol. 7', 
        date: '09 Ags 2026', 
        location: 'Eco Park Ancol', 
        imgUrl: 'assets/shapes.svg',
        minPrice: 'Rp 250.000',
        vipPrice: 1000000, 
        regPrice: 250000 
      },
      { 
        title: 'Symphony of The Night', 
        date: '22 Sep 2026', 
        location: 'Jakarta Theater', 
        imgUrl: 'assets/shapes.svg',
        minPrice: 'Rp 450.000',
        vipPrice: 1500000, 
        regPrice: 450000 
      }
    ];
  }

  // Fungsi navigasi yang mengirimkan data ke TicketService sebelum pindah halaman
  goToDetail(eventData: any) {
    if (eventData) {
      this.ticketService.setSelectedEvent(eventData);
    }
    this.router.navigate(['/detail']);
  }
}