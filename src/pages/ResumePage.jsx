import ResumeCard from '../components/ResumeCard'
import JobData from '../data/JobData'

function ResumePage() {
    return (
        <>
            <h1>Work Experience</h1>
            {JobData.map((jobs, index) => (
                <ResumeCard
                    key={index}
                    company={jobs.company}
                    title={jobs.title}
                    years={jobs.years}
                    bullet1={jobs.bullet1}
                    bullet2={jobs.bullet2}
                    bullet3={jobs.bullet3}
                />
            ))},
            <h1>Education</h1>
        </>
    );
}

export default ResumePage;