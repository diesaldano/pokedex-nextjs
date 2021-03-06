import type { NextComponentType } from 'next'
import  styles from'./loading.module.css'
import Image from 'next/image'
import skeleton from '../../assets/skeleton.png'

const Loading: NextComponentType = () => {
    return (
        <div className={styles.loading } >
            <div className={styles.imageContainer}>
                <Image
                    src={skeleton}
                    alt="Loading..."
                    className={styles.image}
                    objectFit="contain"
                    layout="fill"
                    priority
                />
            </div>
            <div className={styles.cardLoading} >
                <p className={styles.fillname}></p>
            </div>
        </div>
    )
}

export default Loading;


