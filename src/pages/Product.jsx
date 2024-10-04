import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProduct from "../components/RelatedProduct";

    function Product() {

        const {all_products} = useContext(ShopContext);
        const {productId} = useParams();
        const product = all_products.find((e) => e.id === Number(productId));
        if (!product) {
            return <div>Product Not Found!</div>
        }

    return (
        <section className="max_padd_container py-28">
            <div>
                <ProductHd product={product} />
                <ProductDisplay product={product} />
                <ProductDescription />
                <RelatedProduct category={product.category}  />
            </div>
        </section>
    )
}

export default Product;