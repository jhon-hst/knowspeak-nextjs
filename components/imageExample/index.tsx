import styles from './imageExample.module.scss'

type Props = {
    width?: string;
    height?: string;
    color?: string;
}

const ImageExample = ({
    width = '300',
    height = '300',
    color = '0000FF',
}: Props) => {
    console.log(color)
    return (
        <div className={`${styles.imageExample}`}>
            <img src={`https://via.placeholder.com/${width}x${height}/${color}`} />
        </div>
    )
}

export default ImageExample
