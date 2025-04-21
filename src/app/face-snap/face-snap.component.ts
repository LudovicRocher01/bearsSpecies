import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe } from '@angular/common'

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  isSnapped!: boolean;
  buttonText!: string;

  ngOnInit(): void{
    this.isSnapped = false;
    this.buttonText = 'Snap'
  };

  onSnap() {
    if (!this.isSnapped) {
      this.faceSnap.addSnap();
      this.buttonText = 'Snoup !'
      this.isSnapped = true;
    }
    else {
      this.faceSnap.removeSnap();
      this.buttonText = 'Snap';
      this.isSnapped = false;
    }
  }
}