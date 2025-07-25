import profilePic from '../images/Whitaker.png'

function HomePage() {
    return (
        <>
            <h1>D. Thad Whitaker</h1>
            <img src={profilePic} alt="Logo" id="profilePic"/>
            <h3>Product manager, fledgling software <br></br>developer*, and life-long learner</h3>
            <h5>This webpage is a work in progress, so some funkiness is expected at first. *Yes, I'm making this site myself using React.</h5>
        </>
    );
}

export default HomePage;

//style={{fontSize: "100px", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}