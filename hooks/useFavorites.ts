import { Item } from '@/types/ItemInCart'
import { useLocalStorage } from './useLocalStorage'

export const useFavorites = () => {
    const [favorites, setFavorites] = useLocalStorage<Item[] | []>('favorites', [])
    return { favorites, setFavorites }
}
