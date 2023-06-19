import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import ErrScreen from '@/components/ui/Err/ErrScreen'
import Loader from '@/components/ui/Loader/Loader'
import { useFavorites } from '@/hooks/useFavorites'
import { useProducts } from '@/hooks/useProducts'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import LayoutMain from '@/layouts/LayoutMain'
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'
import { type Item } from '../types/ItemInCart'

export default function Home() {
    const { shoppingCart, setShoppingCart } = useShoppingCart()
    const { favorites, setFavorites } = useFavorites()
    const { data: products, isLoading, isError } = useProducts()

    if (isLoading) return <Loader />
    if (!products) return <ErrScreen />
    if (isError) return <ErrScreen />

    return (
        <LayoutMain>
            <ShoppingCart shoppingCart={shoppingCart} favorites={favorites} />

            <Banner />

            {products.map((item: Item) => (
                <Card
                    key={item.id}
                    item={item}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
            ))}
        </LayoutMain>
    )
}
