import HobbyCard from '../components/HobbyCard';
import HobbyData from '../data/HobbyData';

function HobbyPage() {
    return (
        <>
            <h1>Personal Hobbies</h1>
            <div className='hobby-grid'>
                {HobbyData.map((hobbies, index) => (
                    <HobbyCard
                        key = {index}
                        name = {hobbies.name}
                        description = {hobbies.description}
                        goal = {hobbies.goal}
                        image = {hobbies.image}
                        slug = {hobbies.slug}
                    />
                ))}
            </div>
        </>
    );
}

export default HobbyPage