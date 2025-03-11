

export interface IProduct {
    _id: string
    name: string
    description: string
    imageUrl: string[]
    stock: number
    originalPrice: string
    offerPrice: string
    videoUrl: string
    variantNames: {
        name: string
        imageUrl: string
    }
    createdAt: string
    updatedAt: string
}