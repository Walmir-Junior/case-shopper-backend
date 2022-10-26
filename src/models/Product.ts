export interface IProduct {
    id: string,
    name: string,
    price: number,
    qty_stok: number,

}

export interface IPurchase {
    requestId: string,
    productId: number,
    productQty: number

}


