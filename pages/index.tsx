import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import MainLayout from '@/layouts/MainLayout'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export interface Item {
    id: number
    title: string
    price: number
    description: string
    category: Category
    image: string
    rating: Rating
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

export interface ItemInCart {
    id: number
    amount: number
}

export default function Home() {
    const [shoppingCart, setShoppingCart] = useState<ItemInCart[]>([])
    const [favorites, setFavorites] = useState<number[]>([])

    const { refetch, isLoading, isError, data: items } = useQuery(['items'], getData)

    if (isLoading) return <h1>Loading...</h1>

    if (isError) {
        refetch()
        return <h1>Error</h1>
    }

    return (
        <MainLayout>
            <div>
                In cart:{' '}
                {shoppingCart.map((cartItem) => (
                    <div key={cartItem.id}>
                        <p>Item ID: {cartItem.id}</p>
                        <p>Amount: {cartItem.amount}</p>
                    </div>
                ))}
            </div>
            <div>
                Favorites:
                {favorites.map((favoriteItem) => (
                    <div key={favoriteItem}>{favoriteItem}</div>
                ))}
            </div>
            <div className='container'>
                <Banner />
                {items.map((item: Item) => (
                    <div>
                        <Card
                            key={item.id}
                            item={item}
                            shoppingCart={shoppingCart}
                            setShoppingCart={setShoppingCart}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

const getData = async (): Promise<Item[]> => {
    const url = 'https://fakestoreapi.com/products'
    const { data } = await axios.get(url)
    return data
}
