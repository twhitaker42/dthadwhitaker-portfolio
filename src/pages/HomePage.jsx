import profilePic from '../images/Whitaker.png'

function HomePage() {
    return (
        <>
            <h1>Howdy! My name is Thad!</h1>
            <img src={profilePic} alt="Logo" id="profilePic"/>
            <h3>Product manager, fledgling software <br></br>developer*, and life-long learner</h3>
            <h5>This webpage is a work in progress. I'll be adding my experiences, products, and hobbies here shortly. *Yes, I'm making this site myself.</h5>
        </>
    );
}

export default HomePage;