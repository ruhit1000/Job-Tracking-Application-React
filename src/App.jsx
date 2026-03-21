import axios, { Axios } from "axios"
import { Suspense, use, useState } from "react"
import JobPostCardContainer from "./Components/JobPostCardContainer/JobPostCardContainer"
import Header from "./Components/Header/Header"
import Categories from "./Components/Categories/Categories"

const jobDataPromise = axios.get('jobData.json')

function App() {
  const jobDataRes = use(jobDataPromise);
  const jobData = jobDataRes.data
  const [totalJobs, setTotalJobs] = useState(jobData)
  const [interviewJobs, setInterviewJobs] = useState([])
  const [rejectedJobs, setRejectedJobs] = useState([]);

  const [selectedCategoryName, setSelectedCategoryName] = useState('All')
  const handleCategoryClick = (buttonName) => {
    setSelectedCategoryName(buttonName)
  }


  return (
    <div className="bg-[#f8fafc]">
      <Header totalJobs={totalJobs} interviewJobs={interviewJobs} rejectedJobs={rejectedJobs}/>

      <main className="w-[95%] sm:max-w-6xl mx-auto pt-7">
        <Categories selectedCategoryName={selectedCategoryName} handleButtonClick={handleCategoryClick} />

        <JobPostCardContainer jobData={jobData}/>
      </main>
    </div>
  )
}

export default App