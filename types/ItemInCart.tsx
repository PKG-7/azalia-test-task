export interface Item {
    id: number
    title: string
    price: number
    description: string
    category: Category
    image: string
    rating: Rating
}
export interface ItemInCart extends Item {
    amount: number
}

export enum Category {
    Electronics = 'electronics',
    Jewelery = 'jewelery',
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate: number
    count: number
}
