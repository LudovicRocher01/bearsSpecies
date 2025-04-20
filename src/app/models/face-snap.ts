export class FaceSnap {
    location?: string;

    constructor(public title: string,
        public description: string,
        public snaps: number,
        public regime: string,
        public imageUrl: string) {}

    addSnap() {
        this.snaps++;
    }
    removeSnap() {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location
    }
}