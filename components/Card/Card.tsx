import style from './Card.module.scss'
import { Item, ItemInCart } from '@/pages'
import { CartButton } from '../CartButton/CartButton'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { HitBar } from '../HitBar/HitBar'
import { Price } from '../Price/Price'
import { Rating } from '../Rating/Rating'
import { CardImage } from '../CardImage/CardImage'
import { useState } from 'react'

interface Props {
    item: Item
    shoppingCart: ItemInCart[]
    setShoppingCart: (shoppingCart: ItemInCart[]) => void
    favorites: number[]
    setFavorites: (favorites: number[]) => void
}

export default function Card({
    item,
    shoppingCart,
    setShoppingCart,
    favorites,
    setFavorites,
}: Props) {
    const [amountToAdd, setAmountToAdd] = useState<number>(1)

    return (
        <div className={style.card}>
            <HitBar count={item.rating.count} />
            <CardImage item={item} />

            <div>
                <div className={style.category_container}>
                    <div className={style.category}>{item.category}</div>
                    <Rating item={item} />
                </div>

                <div className={style.title}>{item.title}</div>
                <Price price={item.price} />
            </div>

            <div className={style.buttons_container}>
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
