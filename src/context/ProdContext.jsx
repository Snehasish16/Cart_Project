import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    async function getProducts() {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    function addToCart(product) {
        const exist = cart.find((item) => item.id === product.id);

        if (exist) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item,
                ),
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    function increaseQty(id) {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item,
            ),
        );
    }

    function decreaseQty(id) {
        setCart(
            cart.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item,
            ),
        );
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                clearCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
