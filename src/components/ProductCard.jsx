import { Link } from 'react-router-dom'

function ProductCard({name, description, tools, wins}) {
    return (
        <div className="product-card">
            <h2>
                {name}
            </h2>
            <h5><strong>What is it?</strong> {description}</h5>
            <h6><strong>Primary tool used:</strong> {tools}</h6>
            <h6><strong>Key wins:</strong> {wins}</h6>
        </div>
    );
}

export default ProductCard;

/*
<Link to={`/products/${slug}`}>
                    {name}
                </Link>

*/