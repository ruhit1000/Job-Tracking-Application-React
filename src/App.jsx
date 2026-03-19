import axios, { Axios } from "axios"
import CategoryButtons from "./Components/CategoryButtons/CategoryButtons"
import CounterDisplay from "./Components/CounterDisplay/CounterDisplay"
import JobPostCard from "./Components/JobPostCard.jsx/JobPostCard"
import { Suspense } from "react"
import JobPostCardContainer from "./Components/JobPostCardContainer/JobPostCardContainer"

const jobDataPromise = axios.get('jobData.json')

function App() {

  return (
    <div className="bg-[#f8fafc]">
      <header className="w-[95%] sm:max-w-6xl mx-auto pt-4 sm:pt-14">
        <h1 className="font-bold text-[2rem] my-5 text-[#002c5c]">Job Application Tracker</h1>
        <div className="grid grid-cols-3 gap-4 pb-7">
          <CounterDisplay color='text-[#002c5c]' name='Total'></CounterDisplay>
          <CounterDisplay color='text-[#10b981]' name='Interview'></CounterDisplay>
          <CounterDisplay color='text-[#ef4444]' name='Rejected'></CounterDisplay>
        </div>
        <hr className="border-base-300" />
      </header>

      <main className="w-[95%] sm:max-w-6xl mx-auto pt-7">
        <section className="flex justify-between">
          <div>
            <h2 className="text-[#002c5c] font-semibold text-xl mb-6">Available Jobs</h2>
            <CategoryButtons></CategoryButtons>
          </div>
          <div>
            <p className="text-[#64748b] font-medium">0 of 8 jobs</p>
          </div>
        </section>

        <Suspense>
          <JobPostCardContainer jobDataPromise={jobDataPromise}></JobPostCardContainer>
        </Suspense>
      </main>
    </div>
  )
}

export default App
