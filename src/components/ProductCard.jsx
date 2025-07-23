function ProductCard({name, description, tools, wins, slug}) {
    return (
        <div className="product-card">
            <h2><a href={`/products/${slug}/index.html`} target="_blank" rel="noopener noreferrer">
                {name}
            </a></h2>
            <h5><strong>What is it?</strong> {description}</h5>
            <h6><strong>Primary tool used:</strong> {tools}</h6>
            <h6><strong>Key wins:</strong> {wins}</h6>
        </div>
    );
}

export default ProductCard;