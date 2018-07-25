export class Product {
    constructor(
        public id: number,
        public title: string,
        public price?: number,
        public category?: string,
        public img?: string
    ) { }
}
