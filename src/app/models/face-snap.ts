export class FaceSnap {

    constructor(public title: string,
        public description: string,
        public snaps: number,
        public regime: string,
        public location: string,
        public imageUrl: string) {}

    addSnap() {
        this.snaps++;
    }
    removeSnap() {
        this.snaps--;
    }
}