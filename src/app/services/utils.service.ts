import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  // IONIC

  async showLoading() {
    if (this.loading) this.loading.present();

    this.loading = await this.loadingCtrl.create({ message: 'Loading...' });
    this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) this.loading.dismiss();
  }

  async showToast(msg: string, color: string, icon: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      color,
      icon,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  numberMask(value: number): string {
    var sizes = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc'];
    if (value < 1000) {
      if (Number.isInteger(value)) return value.toString();
      return value.toFixed(2);
    }
    var i = Math.floor(Math.log(value) / Math.log(1000));
    return ((i == 0) ? (value / Math.pow(1000, i)) : (value / Math.pow(1000, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
