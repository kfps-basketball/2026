import { useState } from 'react'
import scheduleData from '../data/schedule.json'

function Schedule() {
  const [selectedDay, setSelectedDay] = useState(1)

  const days = [
    { day: 1, date: '1月16日（四）' },
    { day: 2, date: '1月17日（五）' },
    { day: 3, date: '1月18日（六）' },
  ]

  const dayMatches = scheduleData.matches.filter((match) => match.day === selectedDay)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">賽程表</h1>
      <p className="text-center text-gray-600 mb-8">比賽地點：光復國小活動中心</p>

      {/* Day Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {days.map((day) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedDay === day.day
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            <div className="text-sm">第 {day.day} 天</div>
            <div>{day.date}</div>
          </button>
        ))}
      </div>

      {/* Matches */}
      <div className="space-y-4">
        {dayMatches.map((match) => {
          const hasScore = match.scoreA !== null && match.scoreB !== null
          const teamAWon = hasScore && match.scoreA > match.scoreB
          const teamBWon = hasScore && match.scoreB > match.scoreA

          return (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="text-primary font-semibold text-lg">
                    {match.time}
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full">
                    {match.division}
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-right flex-1">
                    <div className={`font-bold text-lg ${teamAWon ? 'text-primary' : ''}`}>
                      {match.teamA}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {hasScore ? (
                      <>
                        <div className={`text-2xl font-bold ${teamAWon ? 'text-primary' : 'text-gray-400'}`}>
                          {match.scoreA}
                        </div>
                        <div className="text-gray-400">:</div>
                        <div className={`text-2xl font-bold ${teamBWon ? 'text-primary' : 'text-gray-400'}`}>
                          {match.scoreB}
                        </div>
                      </>
                    ) : (
                      <div className="text-xl font-bold text-gray-400">VS</div>
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <div className={`font-bold text-lg ${teamBWon ? 'text-primary' : ''}`}>
                      {match.teamB}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {dayMatches.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg shadow-md">
          此日期暫無賽程安排
        </div>
      )}
    </div>
  )
}

export default Schedule
