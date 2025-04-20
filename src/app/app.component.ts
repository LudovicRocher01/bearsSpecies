import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  bearsSnap!: FaceSnap[]
  

  ngOnInit() {
    this.bearsSnap = [
    new FaceSnap('Ours Brun',
      "L'ours classique, le roi du flow",
      0,
      'omnivore',
      'brownBear.jpg'),

    new FaceSnap('Ours Blanc',
      'Le seul ours carnivore',
      0,
      'carnivore',
      'whiteBear.jpg'),

    new FaceSnap('Ours Noir',
      "Aussi appelé Ours noir",
      0,
      'omnivore',
      'blackBear.jpg'),

    new FaceSnap('Ours à Collier',
      "Aussi appelé Ours noir d'Asie, il est cool !",
      0,
      'omnivore',
      'collaredBear.jpg'),

    new FaceSnap('Ours Lippu',
      "J'aime bien son nom à lui",
      0,
      'insectivore',
      'slothBear.jpg'),

    new FaceSnap('Ours Malais',
      "Sachez qu'il aboie",
      0,
      'omnivore',
      'sunBear.jpg'),

    new FaceSnap('Ours à Lunettes',
      "Son nom est trompeur, il ne porte pas vraiment de lunettes",
      0,
      'Végétarien majoritairement',
      'andeanBear.jpg'),

    new FaceSnap('Panda Géant',
      "Et oui c'est un panda !",
      0,
      'Herbivore',
      'giantPanda.jpg'),
    ];
    this.bearsSnap[0].setLocation('Europe, Asie, Amérique du Nord'),
    this.bearsSnap[1].setLocation('Arctique'),
    this.bearsSnap[2].setLocation('Amérique du Nord'),
    this.bearsSnap[3].setLocation('Asie'),
    this.bearsSnap[4].setLocation('Inde, Sri Lanka'),
    this.bearsSnap[5].setLocation('Asie du Sud-Est'),
    this.bearsSnap[6].setLocation('Cordillère des Andes'),
    this.bearsSnap[7].setLocation('Chine');
  }
}
