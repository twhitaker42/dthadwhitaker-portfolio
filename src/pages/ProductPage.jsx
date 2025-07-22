import ProductCard from "../components/ProductCard"
import ProductData from '../data/ProductData'

function ProductPage() {
    return (
        <>
            <h1>Products</h1>
            <div className="product-grid">
                {ProductData.map((products, index) => (
                    <ProductCard
                        key = {index}
                        name = {products.name}
                        description = {products.description}
                        tools = {products.tools}
                        wins = {products.wins}
                        slug = {products.slug}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductPage;