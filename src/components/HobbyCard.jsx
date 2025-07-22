
function HobbyCard({company, title, bullet1, bullet2, bullet3}) {
    return (
        <div className="resume-card">
            <h2>{company}</h2>
            <h4>{title}</h4>
            <ul>
                <li>{bullet1}</li>
                <li>{bullet2}</li>
                <li>{bullet3}</li>
            </ul>
        </div>
    );
}

export default HobbyCard;