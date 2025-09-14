import { ProductCategory } from "./productCategory";

export class Product {
    constructor(
        public id:number,
        public sku:string, 
        public name:string, 
        public description:string, 
        public unitPrice:number, 
        public imageUrl:string,
        public unitsInStock:number,
        public dateCreated:Date,
        public lastUpdated:Date,
        public productCategory:ProductCategory) {}
}
