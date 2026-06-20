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
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
    <ion-content class="auth-page">
      <div class="auth-bg">
        <div class="login-wrap">
          <ion-card class="auth-card">
            <ion-card-content>
              <div class="logo-area">
                <img src="assets/icon/favicon.png" alt="logo" />
                <h2>T!CKET</h2>
                <p>Masuk ke akun Anda untuk melihat tiket dan event.</p>
              </div>

              <form [formGroup]="loginForm" (ngSubmit)="submit()">
                <ion-item>
                  <ion-label position="stacked">Email / Nomor Telepon</ion-label>
                  <ion-input formControlName="identifier"></ion-input>
                </ion-item>
                <div *ngIf="loginForm.get('identifier')?.touched && loginForm.get('identifier')?.invalid" class="error">
                  <ion-text color="danger">Field wajib diisi</ion-text>
                </div>

                <ion-item>
                  <ion-label position="stacked">Kata Sandi</ion-label>
                  <ion-input [type]="showPassword ? 'text' : 'password'" formControlName="password"></ion-input>
                  <ion-button fill="clear" slot="end" (click)="toggleShow()" type="button">
                    <ion-icon [name]="showPassword ? 'eye-outline' : 'eye-off-outline'"></ion-icon>
                  </ion-button>
                </ion-item>
                <div *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid" class="error">
                  <ion-text color="danger">Minimal 6 karakter</ion-text>
                </div>

                <ion-button expand="block" color="primary" type="submit" [disabled]="loginForm.invalid">Login</ion-button>
              </form>

              <div class="links">
                <a routerLink="/register">Daftar akun</a>
                <span> · </span>
                <a routerLink="/forgot">Lupa kata sandi</a>
              </div>

            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  `,
  standalone: true,
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
    ion-card-content {
      padding: 18px 20px 16px 20px;
    }
    .logo-area {
      text-align: center;
      margin-bottom: 12px;
    }
    .logo-area img {
      width: 64px;
      height: 64px;
      margin-bottom: 8px;
    }
    .logo-area h2 {
      margin: 0;
      color: #1d2d73;
      font-size: 24px;
      letter-spacing: 1px;
    }
    .logo-area p {
      margin: 6px auto 0;
      max-width: 280px;
      color: #5d689d;
      font-size: 13px;
      line-height: 1.5;
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
    }
    .error {
      margin: 6px 0 0;
      padding-left: 10px;
    }
    `,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonText,
  ],
})
export class AuthPage {
  loginForm = this.fb.group({
    identifier: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  showPassword = false;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController, private router: Router) {}

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  async submit() {
    if (this.loginForm.invalid) {
      const alert = await this.alertCtrl.create({ header: 'Periksa kembali', message: 'Mohon isi semua field dengan benar.', buttons: ['OK'] });
      await alert.present();
      return;
    }

    const id = this.loginForm.value.identifier;
    const alert = await this.alertCtrl.create({
      header: 'Login berhasil',
      message: `Selamat datang, ${id}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });
    await alert.present();
  }
}
