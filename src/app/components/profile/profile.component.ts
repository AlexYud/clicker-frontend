import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  protected segment = 'click';

  ngOnInit() { }

  segmentChanged(event: any) {
    this.segment = event.target.value;
  }
}
