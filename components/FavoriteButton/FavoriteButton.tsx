import { Item } from '@/types/ItemInCart'
import Image from 'next/image'
import favorite from '../../images/elements/favorite.svg'
import favoriteActive from '../../images/elements/favoriteActive.svg'
import style from './FavoriteButton.module.scss'

interface Props {
    favorites: Item[]
    setFavorites: (favorites: Item[]) => void
    item: Item
}

export function FavoriteButton({ favorites, setFavorites, item }: Props) {
    const addedToFavorite = favorites.some(
        (itemInStorage) => itemInStorage.id === item.id,
    )

    const onClickAddtoFavorite = (item: Item) => {
        setFavorites([...favorites, item])
    }

    const onClickRemoveFromFavorite = (item: Item) => {
        const filtered = favorites.filter((itemInStorage) => item.id !== itemInStorage.id)
        setFavorites(filtered)
    }

    if (addedToFavorite)
        return (
            <Image
                onClick={() => onClickRemoveFromFavorite(item)}
                className={style.button}
                src={favoriteActive}
                alt=''
            />
        )

    return (
        <Image
            onClick={() => onClickAddtoFavorite(item)}
            className={style.button}
            src={favorite}
            alt=''
        />
    )
}
