import { Item } from '@/pages'
import Image from 'next/image'
import favorite from '../../images/elements/favorite.svg'
import favoriteActive from '../../images/elements/favoriteActive.svg'
import style from './FavoriteButton.module.scss'

interface Props {
    favorites: number[]
    setFavorites: (favorites: number[]) => void
    item: Item
}

export function FavoriteButton({ favorites, setFavorites, item }: Props) {
    const addedToFavorite = favorites.some((x) => x === item.id)

    const onClickAddtoFavorite = (itemId: number) => {
        setFavorites([...favorites, itemId])
    }

    const onClickRemoveFromFavorite = (itemId: number) => {
        const filtered = favorites.filter((x) => itemId !== x)
        setFavorites(filtered)
    }

    if (addedToFavorite)
        return (
            <Image
                onClick={() => onClickRemoveFromFavorite(item.id)}
                className={style.button}
                src={favoriteActive}
                alt=''
            />
        )

    return (
        <Image
            onClick={() => onClickAddtoFavorite(item.id)}
            className={style.button}
            src={favorite}
            alt=''
        />
    )
}
