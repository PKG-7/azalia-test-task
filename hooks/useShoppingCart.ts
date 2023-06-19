import { ItemInCart } from '@/types/ItemInCart'
import { useLocalStorage } from './useLocalStorage'

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useLocalStorage<ItemInCart[] | []>(
        'shoppingCart',
        [],
    )
    return { shoppingCart, setShoppingCart }
}
