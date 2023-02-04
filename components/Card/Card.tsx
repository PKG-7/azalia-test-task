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
}

export default function Card({ item, shoppingCart, setShoppingCart }: Props) {
    const [amountToAdd, setAmountToAdd] = useState<number>(1)
    const [addedToCart, setAddedToCart] = useState(false)

    const onClickAddtoCart = (itemId: number, amountToAdd: number) => {
        const itemIndex = shoppingCart.findIndex((cartItem) => cartItem.id === itemId)
        if (itemIndex !== -1) {
            shoppingCart[itemIndex].amount += amountToAdd
            setShoppingCart([...shoppingCart])
        } else {
            setShoppingCart([...shoppingCart, { id: itemId, amount: amountToAdd }])
        }
        //* Убрать этот стэйт, он не нужен
        setAddedToCart(true)
    }

    const onClickRemoveFromCart = (itemId: number) => {
        setShoppingCart(shoppingCart.filter((cartItem) => cartItem.id !== itemId))
        //* Убрать этот стэйт, он не нужен
        setAddedToCart(false)
    }

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
                    amountToAdd={amountToAdd}
                    setAmountToAdd={setAmountToAdd}
                    addedToCart={addedToCart}
                    onClickAddtoCart={onClickAddtoCart}
                    onClickRemoveFromCart={onClickRemoveFromCart}
                />
                <FavoriteButton />
            </div>
        </div>
    )
}
