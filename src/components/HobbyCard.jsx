function HobbyCard({ name, description, goal, image, slug }) {
    const isExternal = slug && slug.startsWith('http');

    const cardContent = (
        <>
            <img className="hobby-card-image" src={`/images/${image}.png`} alt={name} />
            <h2>{name}</h2>
            <h5>{description}</h5>
            <h6><strong>Goal:</strong> {goal}</h6>
        </>
    );

    return isExternal ? (
        <a href={slug} className="hobby-card" rel="noopener noreferrer">
            {cardContent}
        </a>
    ) : (
        <div className="hobby-card">
            {cardContent}
        </div>
    );
}

export default HobbyCard;