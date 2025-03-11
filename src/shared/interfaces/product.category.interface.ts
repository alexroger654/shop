export interface IProductCategory {
    _id: string
    userId: string
    category: {
        name: string
        imageUrl: string
    }[]
}
