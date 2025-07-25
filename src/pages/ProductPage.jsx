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
                        slug = {products.slug}
                        image = {products.image}
                        imageCreds = {products.imageCreds}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductPage;