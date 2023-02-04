import styles from './Banner.module.scss'
import Image from 'next/image'
import arrow from '../../images/elements/arrow.svg'
import bannerOne from '../../images/banners/banner-1.png'
import bannerTwo from '../../images/banners/banner-2.png'

interface Props {
    //   text: string;
}

export default function Banner({}: Props) {
    return (
        <div className={styles.card}>
            <h1 className=''>Всё для комфортной работы</h1>
            <Image src={arrow} alt='' className={styles.arrow} />
            <Image src={bannerOne} alt='' className={styles.banner} />
            <Image src={bannerTwo} alt='' className={styles.banner} />
        </div>
    )
}
