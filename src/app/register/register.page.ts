import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonText],
  template: `
    <ion-content class="auth-page">
      <div class="auth-bg">
        <div class="login-wrap">
          <ion-card class="auth-card">
            <ion-card-content>
              <h3>Buat Akun Baru</h3>
              <form [formGroup]="regForm" (ngSubmit)="submit()">
                <ion-item>
                  <ion-label position="stacked">Nama Lengkap</ion-label>
                  <ion-input formControlName="name"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Email</ion-label>
                  <ion-input formControlName="email" type="email"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Nomor Telepon</ion-label>
                  <ion-input formControlName="phone"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Kata Sandi</ion-label>
                  <ion-input formControlName="password" type="password"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Konfirmasi Kata Sandi</ion-label>
                  <ion-input formControlName="confirmPassword" type="password"></ion-input>
                </ion-item>

                <ion-button expand="block" color="primary" type="submit" [disabled]="regForm.invalid">Daftar</ion-button>
              </form>

              <div class="links">
                <a (click)="toLogin()">Sudah punya akun? Login</a>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  `,
  styles: [
    `
    .auth-page {
      --background: transparent;
    }
    .auth-bg {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      background: radial-gradient(circle at top left, #1c3b90, #06142c 80%);
    }
    .login-wrap {
      width: min(380px, 100%);
      max-width: 380px;
    }
    .auth-card {
      border-radius: 22px;
      background: rgba(255, 255, 255, 0.96);
      color: #081d4e;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.24);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 0;
    }
    ion-card-content {
      padding: 18px 20px 16px 20px;
    }
    h3 {
      text-align: center;
      margin: 0 0 10px;
      color: #1d2d73;
      font-size: 22px;
    }
    ion-item {
      --background: #f7f9ff;
      border-radius: 10px;
      margin-bottom: 6px;
      border: 1px solid rgba(49, 73, 138, 0.14);
      --padding-start: 8px;
      --padding-end: 8px;
      --padding-top: 5px;
      --padding-bottom: 5px;
      --inner-padding-start: 0;
      --inner-padding-end: 0;
      --border-bottom: none;
      --border-width: 0;
      box-shadow: none;
      min-height: 32px;
    }
    ion-label {
      color: #5b6b9d;
      font-size: 16px;
      font-weight: 500;
    }
    ion-input {
      color: #102051;
      font-size: 16px;
      --padding-start: 0;
      --padding-end: 0;
      --padding-top: 0px;
      --padding-bottom: 0px;
    }
    ion-input::placeholder {
      color: #b8c5e0;
      opacity: 1;
    }
    ion-button {
      --border-radius: 12px;
      margin-top: 10px;
      font-weight: 700;
      font-size: 13px;
      height: 38px;
    }
    .links {
      text-align: center;
      margin-top: 10px;
      color: #6072b9;
      font-size: 13px;
    }
    .links a {
      color: #1f3b98;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
    }
    `
  ],
})
export class RegisterPage {
  regForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', []],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private alertCtrl: AlertController, private router: Router) {}

  async submit() {
    if (this.regForm.invalid || this.regForm.value.password !== this.regForm.value.confirmPassword) {
      const alert = await this.alertCtrl.create({ header: 'Periksa kembali', message: 'Pastikan semua field terisi dan kata sandi cocok.', buttons: ['OK'] });
      await alert.present();
      return;
    }

    const alert = await this.alertCtrl.create({ header: 'Berhasil', message: 'Akun berhasil dibuat.', buttons: [{ text: 'OK', handler: () => this.router.navigate(['/auth']) }] });
    await alert.present();
  }

  toLogin() { this.router.navigate(['/auth']); }
}
