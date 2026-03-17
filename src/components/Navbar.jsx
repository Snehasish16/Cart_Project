import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { cart } = useContext(ProductContext);
    const totalItems = cart.length;

    return (
        <nav
            className="navbar p-3 sticky-top shadow"
            style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link
                    className="navbar-brand text-white d-flex align-items-center gap-2"
                    to="/"
                >
                    <span style={{ fontSize: "24px" }}><i className="fa-solid fa-cart-shopping"></i></span>
                    <h4 className="m-0 fw-bold fs-3">Cart Project</h4>
                </Link>

                <Link
                    to="/cart"
                    className="btn position-relative d-flex align-items-center gap-2 px-3 py-2"
                    style={{
                        background: "#ffffff",
                        color: "#764ba2",
                        borderRadius: "30px",
                        fontWeight: "600",
                    }}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                    Cart
                    <span
                        className="badge bg-danger position-absolute"
                        style={{
                            top: "-5px",
                            right: "-10px",
                            borderRadius: "50%",
                            padding: "6px 8px",
                            fontSize: "12px",
                        }}
                    >
                        {totalItems}
                    </span>
                </Link>
            </div>
        </nav>
    );
}
