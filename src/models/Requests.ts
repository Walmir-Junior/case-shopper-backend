export interface IProduct {
    productId: number
    productQty: number
}

export interface IRequests {
    id: string,
    custumerName: string,
    dueDate: Date,
    purchasesList: IProduct[]
}

