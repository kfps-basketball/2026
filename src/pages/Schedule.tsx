import { useState } from 'react'
import scheduleData from '../data/schedule.json'

function Schedule() {
  const [selectedDay, setSelectedDay] = useState(1)

  const days = [
    { day: 1, date: '1月16日（五）' },
    { day: 2, date: '1月17日（六）' },
    { day: 3, date: '1月18日（日）' },
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
          // Special rendering for events (opening ceremony)
          if ('isEvent' in match && match.isEvent) {
            return (
              <div
                key={match.id}
                className="bg-gradient-to-r from-primary to-red-700 rounded-lg shadow-lg p-8 text-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-2xl font-bold">
                      {match.time}
                    </div>
                    <div className="text-2xl font-bold px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                      {match.division}
                    </div>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          }

          const hasScore = match.scoreA !== null && match.scoreB !== null
          const teamAWon = hasScore && (match.scoreA ?? 0) > (match.scoreB ?? 0)
          const teamBWon = hasScore && (match.scoreB ?? 0) > (match.scoreA ?? 0)

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
                  <div className="px-3 py-1 bg-red-100 text-primary text-sm rounded-full">
                    {match.division}
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-right flex-1">
                    <div className={`font-bold text-lg whitespace-nowrap ${teamAWon ? 'text-primary' : ''}`}>
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
                    <div className={`font-bold text-lg whitespace-nowrap ${teamBWon ? 'text-primary' : ''}`}>
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

      {/* Rankings Section - Only show on Day 3 */}
      {selectedDay === 3 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">最終排名</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 五年級 Rankings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-center text-primary mb-4">五年級排名</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥇</div>
                    <span className="font-bold text-white text-lg">冠軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['五年級'].champion}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥈</div>
                    <span className="font-bold text-white text-lg">亞軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['五年級'].runnerUp}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥉</div>
                    <span className="font-bold text-white text-lg">季軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['五年級'].third}
                  </span>
                </div>
              </div>
            </div>

            {/* 六年級 Rankings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-center text-primary mb-4">六年級排名</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥇</div>
                    <span className="font-bold text-white text-lg">冠軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['六年級'].champion}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥈</div>
                    <span className="font-bold text-white text-lg">亞軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['六年級'].runnerUp}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🥉</div>
                    <span className="font-bold text-white text-lg">季軍</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    {scheduleData.rankings['六年級'].third}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Schedule
