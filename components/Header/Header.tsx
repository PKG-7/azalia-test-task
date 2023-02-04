import { Item, ItemInCart } from '@/pages'
import styles from './Header.module.scss'

export interface IHeader {
    shoppingCart: ItemInCart[]
    favorites: number[]
    items: Item[]
}

export function Header({ shoppingCart, favorites, items }: IHeader) {
    if (shoppingCart.length > 0 || favorites.length > 0)
        return (
            <div className={styles.container}>
                <div className={styles.cart}>
                    In cart:{' '}
                    {shoppingCart.map((cartItem) => (
                        <div className={styles.card} key={cartItem.id}>
                            <p>Item ID: {cartItem.id}</p>
                            <p>Amount: {cartItem.amount}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.favorites}>
                    Favorites:
                    {favorites.map((favoriteItem) => (
                        <div className={styles.card} key={favoriteItem}>
                            {favoriteItem}
                        </div>
                    ))}
                </div>
            </div>
        )
    return null
}
