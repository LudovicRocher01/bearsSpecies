import { SnapType } from "./snap-type.type";

export class FaceSnap {

    id: string;

    constructor(public title: string,
        public description: string,
        public snaps: number,
        public regime: string,
        public location: string,
        public imageUrl: string) {
            this.id = crypto.randomUUID().substring(0, 8);
        }

    snap(snapType: SnapType) {
        if (snapType === 'like') {
            this.addSnap();
        }
        else if (snapType === 'unlike') {
            this.removeSnap();
        }
    }

    addSnap() {
        this.snaps++;
    }
    removeSnap() {
        this.snaps--;
    }
}