import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { UpperCasePipe, TitleCasePipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-bear',
  imports: [UpperCasePipe, TitleCasePipe],
  templateUrl: './details-bear.component.html',
  styleUrl: './details-bear.component.scss'
})
export class DetailsBearComponent implements OnInit {
  faceSnap!: FaceSnap

  constructor(private faceSnapsService: FaceSnapService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }
}
