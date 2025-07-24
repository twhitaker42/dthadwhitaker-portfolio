import { Link } from 'react-router-dom';

function ProductCard({ name, description, tools, wins, slug, image }) {
    const isExternal = slug.startsWith('http');

    const cardContent = (
        <>
            <img className="product-card-image" src={`/images/${image}.png`} alt={name} />
            <h2>{name}</h2>
            <h5><strong>What is it?</strong> {description}</h5>
            <h6><strong>Primary tool used:</strong> {tools}</h6>
        </>
    );

    return isExternal ? (
        <a href={slug} className="product-card" rel="noopener noreferrer">
            {cardContent}
        </a>
    ) : (
        <a href={`/products/${slug}`} className="product-card">
            {cardContent}
        </a>
    );
}

export default ProductCard;
