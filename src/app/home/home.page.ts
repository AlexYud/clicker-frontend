import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../components/profile/profile.component';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { TipService } from '../services/tip.service';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public viewersSubscription: Subscription = this.dataService.getViewers().subscribe((viewers: number) => this.viewers = viewers);
  public moneySubscription: Subscription = this.dataService.getMoney().subscribe((money: number) => this.money = money);

  public viewers: number = 0;
  public money: number = 0;

  public playerName: string = 'Galowillian';

  public chat: any[] = [];
  public lastTip: any[] = [];

  public isCameraOn: boolean = true;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private chatService: ChatService,
    private tipService: TipService,
  ) { }

  ngOnInit() {
    this.dataService.autoClicker();
    this.chatService.createSpectators();
    this.updateChat();
    this.updateTip();
  }

  ngOnDestroy() {
    this.viewersSubscription.unsubscribe();
    this.moneySubscription.unsubscribe();
  }

  mathFloor(value: number) {
    return Math.floor(value);
  }

  async openProfileModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileComponent,
      initialBreakpoint: 0.75,
      breakpoints: [0, 0.75],
    });
    modal.present();
    await modal.onWillDismiss();
  }

  toggleCamera() {
    this.isCameraOn = !this.isCameraOn;
    if (this.isCameraOn) return this.stopCamera();
    return this.startCamera();
  }

  startCamera() {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'front',
      parent: "cameraPreview",
      toBack: true,
      lockAndroidOrientation: true,
      height: window.screen.height,
      disableAudio: true,
    };
    CameraPreview.start(cameraPreviewOptions);
  }

  stopCamera() {
    CameraPreview.stop();
  }

  addClick() {
    this.dataService.updateViewers(this.viewers + 1);
  }

  addMoney(money: number) {
    this.dataService.updateMoney(money);
  }

  addChat() {
    if (this.chat.length === 4) this.chat.shift();
    this.chat.push(this.chatService.getRandomComment());
  }

  addTip() {
    const randomTip = this.tipService.getRandomTip();
    this.lastTip.shift();
    this.lastTip.push(randomTip);
    this.addMoney(randomTip.amount);
  }

  updateChat() {
    var chance: number = 100;
    setInterval(() => {
      switch (true) {
        case this.viewers < 30:
          chance = 100
          break;
        case this.viewers < 100:
          chance = 98
          break;
        case this.viewers < 200:
          chance = 96
          break;
        case this.viewers < 500:
          chance = 95
          break;
        case this.viewers < 1000:
          chance = 85
          break;
        case this.viewers < 5000:
          chance = 80
          break;
        case this.viewers < 10000:
          chance = 75
          break;
        case this.viewers < 15000:
          chance = 70
          break;
        default:
          break;
      }

      if (Math.floor(Math.random() * 100) > chance) this.addChat();
    }, 100);
  }

  updateTip() {
    var chance: number = 99;
    setInterval(() => {
      switch (true) {
        case this.viewers < 50:
          chance = 99
          break;
        case this.viewers < 200:
          chance = 97
          break;
        case this.viewers < 500:
          chance = 95
          break;
        case this.viewers < 1000:
          chance = 85
          break;
        case this.viewers < 5000:
          chance = 80
          break;
        case this.viewers < 10000:
          chance = 75
          break;
        case this.viewers < 15000:
          chance = 70
          break;
        default:
          break;
      }

      if (this.lastTip.length >= 1) {
        const tipTimestamp = this.lastTip[0].timestamp;
        const currentTimestamp = new Date();
        const diff = (currentTimestamp.getTime() - tipTimestamp.getTime()) / 1000;

        if (diff >= 10) this.lastTip.shift();
      }

      if (Math.floor(Math.random() * 100) > chance) this.addTip();
    }, 3000);
  }
}
