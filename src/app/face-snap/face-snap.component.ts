import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe } from '@angular/common'
import { FaceSnapService } from '../services/face-snaps.service';

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

  constructor(private FaceSnapsService: FaceSnapService) {}

  ngOnInit(): void{
    this.isSnapped = false;
    this.buttonText = 'Like'
  };

  onSnap() {
    if (!this.isSnapped) {
      this.snap()
    }
    else {
      this.unsnap()
    }
  }

  snap() {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'like');
    this.buttonText = 'Unlike !'
    this.isSnapped = true;
  }

  unsnap() {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unlike');
    this.buttonText = 'Like';
    this.isSnapped = false;
  }
}