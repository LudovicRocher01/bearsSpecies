import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    private bearsSnap: FaceSnap[] = [
        new FaceSnap('Ours Brun',
          "L'ours brun est l’un des plus grands carnivores terrestres. Il est connu pour sa force, son régime omnivore, et son impressionnante capacité d’adaptation aux climats froids comme tempérés.",      0,
          'omnivore',
          'europe, asie, amérique du nord',
          'brownBear.jpg'),
    
        new FaceSnap('Ours Blanc',
          "Aussi appelé ours polaire, c’est un nageur hors pair capable de parcourir des dizaines de kilomètres à la nage. Il est parfaitement adapté au froid grâce à sa fourrure épaisse et sa couche de graisse.",      0,
          'carnivore',
          'arctique',
          'whiteBear.jpg'),
    
        new FaceSnap('Ours Noir',
          "L’ours noir d’Amérique est plus petit que l’ours brun. Il grimpe facilement aux arbres et vit souvent dans les forêts denses. Il peut être de différentes couleurs, malgré son nom.",      0,
          'omnivore',
          'amérique du nord',
          'blackBear.jpg'),
    
        new FaceSnap('Ours à Collier',
          "Reconnaissable à la tache blanche en forme de croissant sur sa poitrine, cet ours vit en Asie. Il est souvent actif la nuit et peut se montrer agressif s’il est surpris.",      0,
          'omnivore',
          'asie',
          'collaredBear.jpg'),
    
        new FaceSnap('Ours Lippu',
          "L’ours lippu, ou ours paresseux, a un museau très allongé et adore les termites. Il utilise ses grandes griffes pour ouvrir les nids et aspire les insectes avec un bruit distinctif.",      0,
          'insectivore',
          'inde, sri lanka',
          'slothBear.jpg'),
    
        new FaceSnap('Ours Malais',
          "Le plus petit des ours ! Il a une langue très longue pour lécher le miel et les insectes. Il est aussi connu pour ses aboiements inhabituels et sa tache orange en forme de croissant sur la poitrine.",      0,
          'omnivore',
          'asie du sud-est',
          'sunBear.jpg'),
    
        new FaceSnap('Ours à Lunettes',
          "Son nom vient des marques claires autour de ses yeux qui ressemblent à des lunettes. C’est l’unique espèce d’ours d’Amérique du Sud, plutôt timide et friand de végétaux.",      0,
          'Végétarien majoritairement',
          'cordillère des andes',
          'andeanBear.jpg'),
    
        new FaceSnap('Panda Géant',
          "Bien qu’il fasse partie de la famille des ours, le panda géant se nourrit presque exclusivement de bambou. Il est un symbole fort de la conservation des espèces.",      0,
          'Herbivore',
          'chine',
          'giantPanda.jpg'),
        ];
    getBearsSnap(): FaceSnap[] {
        return [...this.bearsSnap];
    }

    getFaceSnapById(faceSnapId:string): FaceSnap {
      const foundFaceSnap = this.bearsSnap.find(faceSnap => faceSnap.id === faceSnapId);
      if (!foundFaceSnap) {
        throw new Error('FaceSnap not found !')
      }
      return foundFaceSnap
    }
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
      const foundFaceSnap = this.bearsSnap.find(faceSnap => faceSnap.id === faceSnapId);
      if (!foundFaceSnap) {
        throw new Error('FaceSnap not found!');
      }
      foundFaceSnap.snap(snapType);
  }
}