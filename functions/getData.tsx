import axios from 'axios'
import { type Item } from '@/types/ItemInCart'

export const getData = async (): Promise<Item[]> => {
    const url = 'https://fakestoreapi.com/products'
    const { data } = await axios.get(url)
    return data
}
