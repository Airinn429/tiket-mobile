import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // Menghubungkan navigasi klik tab menu
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonSearchbar, 
  IonLabel,      
  IonChip,        
  IonCard,        
  IonCardContent, 
  IonFooter,      
  IonTabBar,      
  IonTabButton    
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html', // Diubah agar membaca file HTML luarmu
  styleUrls: ['./events.page.scss'],  // Diubah agar membaca file SCSS luarmu
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterLink, // Mendaftarkan routerLink agar tab menu bawah aktif
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonSearchbar, 
    IonLabel,      
    IonChip,        
    IonCard,        
    IonCardContent, 
    IonFooter,      
    IonTabBar,      
    IonTabButton    
  ]
})
export class EventsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}