import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(ProductContext);

    return (
        <div className="col-md-3 mb-4">
            <div className="card product-card h-100 shadow-sm border-0">
                <div className="image-wrapper">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="card-img-top img-fluid"
                    />

                    <span className="badge bg-success position-absolute top-0 start-0 m-2">
                        New
                    </span>
                </div>

                <div className="card-body text-center">
                    <h6 className="product-title">{product.title}</h6>

                    <div className="rating mb-2">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>

                    <p className="price">$ {product.price}</p>
                </div>

                <div className="card-footer bg-transparent border-0 text-center">
                    <button
                        className="btn add-btn text-light"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
