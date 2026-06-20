import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonText],
  template: `
    <ion-content class="auth-page">
      <div class="auth-bg">
        <div class="login-wrap">
          <ion-card class="auth-card">
            <ion-card-content>
              <h3>Reset Kata Sandi</h3>
              <p class="subtitle">Masukkan email Anda untuk menerima link reset kata sandi.</p>
              <form [formGroup]="fgtForm" (ngSubmit)="submit()">
                <ion-item>
                  <ion-label position="stacked">Email terdaftar</ion-label>
                  <ion-input formControlName="email" type="email"></ion-input>
                </ion-item>

                <ion-button expand="block" color="primary" type="submit" [disabled]="fgtForm.invalid">Kirim Link Reset</ion-button>
              </form>

              <div class="links">
                <a (click)="toLogin()">Kembali ke Login</a>
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
      margin: 0 0 6px;
      color: #1d2d73;
      font-size: 22px;
    }
    .subtitle {
      text-align: center;
      margin: 0 0 10px;
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
      cursor: pointer;
    }
    `
  ],
})
export class ForgotPage {
  fgtForm = this.fb.group({ email: ['', [Validators.required, Validators.email]] });

  constructor(private fb: FormBuilder, private alertCtrl: AlertController, private router: Router) {}

  async submit() {
    if (this.fgtForm.invalid) {
      const alert = await this.alertCtrl.create({ header: 'Periksa kembali', message: 'Masukkan email yang valid.', buttons: ['OK'] });
      await alert.present();
      return;
    }

    const alert = await this.alertCtrl.create({ header: 'Terkirim', message: 'Link reset kata sandi telah dikirim ke email Anda.', buttons: [{ text: 'OK', handler: () => this.router.navigate(['/auth']) }] });
    await alert.present();
  }

  toLogin() { this.router.navigate(['/auth']); }
}
