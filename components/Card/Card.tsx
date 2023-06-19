import { Item, ItemInCart } from '@/types/ItemInCart'
import { useState } from 'react'
import { CardImage } from '../CardImage/CardImage'
import { CartButton } from '../CartButton/CartButton'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { BestsellerBar } from '../BestsellerBar/BestsellerBar'
import { Price } from '../Price/Price'
import { Rating } from '../Rating/Rating'
import style from './Card.module.scss'

interface Props {
    item: Item
    shoppingCart: ItemInCart[]
    setShoppingCart: (shoppingCart: ItemInCart[]) => void
    favorites: Item[]
    setFavorites: (favorites: Item[]) => void
}

export default function Card({
    item,
    shoppingCart,
    setShoppingCart,
    favorites,
    setFavorites,
}: Props) {
    const [amountToAdd, setAmountToAdd] = useState(1)

    return (
        <div className={style.card}>
            <BestsellerBar count={item.rating.count} />
            <CardImage item={item} />

            <div className={style.content}>
                <div className={style.categoryContainer}>
                    <div className={style.category}>{item.category}</div>
                    <Rating item={item} />
                </div>

                <div className={style.title}>{item.title}</div>
                <Price price={item.price} />
            </div>

            <div className={style.buttonsContainer}>
                <CartButton
                    item={item}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    amountToAdd={amountToAdd}
                    setAmountToAdd={setAmountToAdd}
                />

                <FavoriteButton
                    item={item}
                    setFavorites={setFavorites}
                    favorites={favorites}
                />
            </div>
        </div>
    )
}
