import { useState } from 'react'
import ProductDescription from './ProductDescription'
import FavoriteButton from './FavoriteButton'

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const total = quantity * product.price

  return (
    <article className="product-card">
      <FavoriteButton productName={product.name} />
      <h2>{product.name}</h2>
      <p>₪{product.price}</p>
      
      <ProductDescription
        short={product.description}
        long={product.longDescription}
      />

      <ul>
        {product.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="quantity">
        <button
          onClick={() => setQuantity((q) => Math.max(0, q - 1))}
          disabled={quantity === 0}>−</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      <p className="total">סה״כ: ₪{total}</p>

      {isAdded ? (
        /*הודעה */
        <p className='added-message'>
          נוספו לסל: {quantity} יחידות
        </p>
      ) : (
        /*כפתור */
        <button
          className='add-to-cart'
          onClick={() => setIsAdded(true)}
          disabled={quantity === 0}
        >
          הוסף לסל
        </button>
      )}
    </article>
  )
}

export default ProductCard
