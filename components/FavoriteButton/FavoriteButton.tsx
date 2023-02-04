import Image from 'next/image'
import favorite from '../../images/elements/favorite.svg'

export function FavoriteButton() {
    return <Image src={favorite} alt='' />
}
