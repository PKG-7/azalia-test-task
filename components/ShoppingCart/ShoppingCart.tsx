import { Item, ItemInCart } from '@/types/ItemInCart'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import svgHeart from '../../images/elements/heart.svg'
import svgCart from '../../images/elements/svgCart.svg'
import st from './ShoppingCart.module.scss'

export interface iShoppingCart {
    shoppingCart: ItemInCart[]
    favorites: Item[]
}

export function ShoppingCart({ favorites, shoppingCart }: iShoppingCart) {
    const [cartOpened, setCartOpened] = useState(false)

    if (!cartOpened)
        return (
            <CartButton
                setCartOpened={setCartOpened}
                favorites={favorites}
                shoppingCart={shoppingCart}
            />
        )

    return (
        <div className={st.container}>
            <div className={st.nav}>
                <p>🛒 Корзина</p>
                <button onClick={() => setCartOpened(false)}>✖</button>
            </div>

            <CartProducts shoppingCart={shoppingCart} />
            <CartFavorites favorites={favorites} />
        </div>
    )
}

function CartProducts({ shoppingCart }: { shoppingCart: ItemInCart[] }) {
    return (
        <div className={st.items}>
            {/* Товары:{' '} */}
            {shoppingCart.length > 0 ? (
                shoppingCart.map((cartItem) => {
                    return (
                        <div className={st.card} key={cartItem.id}>
                            <p>{cartItem.title}</p>
                            <Image
                                src={cartItem.image}
                                alt='item'
                                width={50}
                                height={50}
                            />
                            <p>{cartItem.amount} шт.</p>
                        </div>
                    )
                })
            ) : (
                <div className={st.empty}>Корзина пуста</div>
            )}
        </div>
    )
}

function CartFavorites({ favorites }: { favorites: Item[] }) {
    return (
        <>
            <div className={st.title}>💜 Избранное:</div>
            <div className={st.items}>
                {favorites.length > 0 ? (
                    <>
                        {favorites.map((favoriteItem) => {
                            return (
                                <div className={st.card} key={favoriteItem.id}>
                                    <p>{favoriteItem.title}</p>
                                    <Image
                                        src={favoriteItem.image}
                                        alt='item'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <div className={st.empty}>Нет избранных</div>
                )}
            </div>
        </>
    )
}

interface iCartButton {
    setCartOpened: Dispatch<SetStateAction<boolean>>
    favorites: Item[]
    shoppingCart: ItemInCart[]
}
function CartButton({ setCartOpened, favorites, shoppingCart }: iCartButton) {
    return (
        <button onClick={() => setCartOpened(true)} className={st.vidget}>
            {favorites.length > 0 && (
                <div className={st.icon}>
                    <Image src={svgHeart} alt='избранное' />
                    <div className={st.counter}>
                        <div>{favorites.length}</div>
                    </div>
                </div>
            )}
            <div className={st.icon}>
                <Image src={svgCart} alt='корзина' />
                {shoppingCart && shoppingCart.length > 0 && (
                    <div className={st.counter}>
                        <div>{shoppingCart.length}</div>
                    </div>
                )}
            </div>
        </button>
    )
}
