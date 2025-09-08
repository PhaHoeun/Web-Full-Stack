import styles from './styles.module.css';

const ProductCart = ({
    id,
    productName,
    description,
    price,
    stock,
    image,
    onAddToCart,
}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt='My Wife' width={150} height={200} />
            <div className={styles.productName} >{productName}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{price}$</div>
            <div>Stock: {stock}</div>
            <button onClick={() => onAddToCart(id)} style={{ borderRadius: 5, marginTop: 10 }} >Add to Cart</button>
        </div>
    );
}

export default ProductCart;