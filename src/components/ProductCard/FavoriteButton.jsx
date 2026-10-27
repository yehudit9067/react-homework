import { useState } from "react";

function FavoriteButton({ productName }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => setIsFavorite((v) => !v)

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
      onClick={toggleFavorite}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite
          ? `הסר את ${productName} מהמועדפים`
          : `הוסף את ${productName} למועדפים`
      }
    >
      <span className="favorite-icon" aria-hidden="true">
        {isFavorite ? "♥" : "♡"}
      </span>
      <span className="favorite-label">
        {isFavorite ? "במועדפים" : `הוסף את ${productName} למועדפים`}
      </span>
    </button>
  )
}

export default FavoriteButton
