
import { useAuth } from "../context/useAuth"
import { filterByDate } from "../hooks/filterByDate"
import { filterByExpenceDate } from "../hooks/filterByExpenceDate"
import { incomeAndOutcome } from "../hooks/incomeAndOutcome"
import { useGetExpence } from "../hooks/useGetExpence"
import { useGetFinance } from "../hooks/useGetFinance"
import { formatGeorgianLari } from "../utils/formatGeorgianLari"
import ExpencePieChart from "./ExpencePieChart"
import IncomePieChart from "./IncomePieChart"

import { HiOutlinePlus } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom"


function Chart() {
  const { data, isPending } = useGetFinance()
  const { data: expenceData, isPending: isExpencePending } = useGetExpence()
  const { loading } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const period = searchParams.get('active') || 'today'

  if (isPending || loading || isExpencePending) return <p>Loading...</p>

  const { filteredData, balance } = filterByDate(period, data, expenceData)
  const { income, expence } = incomeAndOutcome(data, expenceData)
  const { filteredExpenceData, expenceBalance } = filterByExpenceDate(expenceData, period)



  function handleActiveButton(value) {
    searchParams.set('active', value)
    setSearchParams(searchParams)
  }

  return (
    <div className='max-w-[1920px] w-full flex justify-center items-center m-auto flex-col'>
      <div className="flex justify-center items-center pt-10 gap-4">
        <p className="text-4xl font-semibold">Balance</p>
        <p className="flex items-center text-4xl font-semibold text-stone-400">
          <HiOutlinePlus className="text-5xl" />
          {formatGeorgianLari(balance)}
        </p>
      </div>

      <div className="w-full flex justify-between items-center px-20">
        <h1 className="text-start py-10 text-2xl font-semibold">Income</h1>
        <div className="flex items-center gap-2">
          <label className="mr-2 text-xl font-semibold">Enter data for:</label>
          <button onClick={() => handleActiveButton('today')} className={`border-1 border-stone-200 py-2 px-3 rounded-lg ${period === 'today' ? 'bg-blue-500 opacity-60 text-stone-100' : 'bg-white hover:bg-slate-100'}  font-normal  duration-200 transition-all`}>Today</button>
        </div>

        <div className="flex items-center gap-2">
          <label className="mr-2 text-xl font-semibold">View previous data: </label>
          <button onClick={() => handleActiveButton('week')} className={`border-1 border-stone-200 py-2 px-3 rounded-lg ${period === 'week' ? 'bg-blue-500 opacity-60 text-stone-100' : 'bg-white hover:bg-slate-100'}  font-normal  duration-200 transition-all`}>This Week</button>
          <button onClick={() => handleActiveButton('month')} className={`border-1 border-stone-200 py-2 px-3 rounded-lg ${period === 'month' ? 'bg-blue-500 opacity-60 text-stone-100' : 'bg-white hover:bg-slate-100'}  font-normal  duration-200 transition-all`}>This Month</button>
          <button onClick={() => handleActiveButton('year')} className={`border-1 border-stone-200 py-2 px-3 rounded-lg ${period === 'year' ? 'bg-blue-500 opacity-60 text-stone-100' : 'bg-white hover:bg-slate-100'}  font-normal  duration-200 transition-all`}>This Year</button>
        </div>


        <h1 className="text-end py-10 text-2xl font-semibold">Expense</h1>
      </div>

      <div className="flex items-center">
        <div className="flex justify-center items-center px-20 flex-col">
          <IncomePieChart income={income} data={data} />
        </div>

        <div className="flex justify-center items-center px-20 flex-col">
          <ExpencePieChart filteredExpenceData={filteredExpenceData} expenceBalance={expenceBalance} />
        </div>
      </div>
    </div >
  )
}

export default Chart

