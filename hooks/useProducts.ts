import { getData } from '@/functions/getData'
import { useQuery } from '@tanstack/react-query'

export const useProducts = () => {
    return useQuery(['products'], getData)
}
