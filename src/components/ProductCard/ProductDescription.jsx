import { useState } from "react";

function ProductDescription ({short, long = short}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            {isExpanded ? long : short}
            <button onClick={() => setIsExpanded((v) => !v)}>
                {isExpanded ? "הצג פחות" : "קרא עוד"}
            </button>
        </div>
    );
}
export default ProductDescription;