export class Product {
    constructor(
        public id: number,
        public title: string,
        public sale: boolean,
        public price?: number,
        public category?: string,
        public img?: string,
    ) { }
}
