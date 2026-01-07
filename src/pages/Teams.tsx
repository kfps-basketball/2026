import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import teamsData from '../data/teams.json'

function Teams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedDivision, setSelectedDivision] = useState<string>(
    searchParams.get('division') || 'grade6'
  )

  useEffect(() => {
    setSearchParams({ division: selectedDivision }, { replace: true })
  }, [selectedDivision, setSearchParams])

  const divisions = [
    { id: 'grade6', label: '六年級' },
    { id: 'grade5', label: '五年級' },
    { id: 'grade4', label: '四年級' },
  ]

  const filteredTeams = teamsData.teams.filter((team) => team.division === selectedDivision)

  const gradeImages: Record<string, string[]> = {
    grade6: ['6th_grade_1.jpg', '6th_grade_2.jpg'],
    grade5: ['5th_grade.jpg'],
    grade4: ['4th_grade.jpg'],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">參賽隊伍</h1>

      {/* Division Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {divisions.map((division) => (
          <button
            key={division.id}
            onClick={() => setSelectedDivision(division.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedDivision === division.id
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {division.label}
          </button>
        ))}
      </div>

      {/* Grade Images */}
      {gradeImages[selectedDivision] && gradeImages[selectedDivision].length > 0 && (
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mb-12">
          {gradeImages[selectedDivision].map((image, index) => (
            <a
              key={index}
              href={`${import.meta.env.BASE_URL}${image}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`${divisions.find((d) => d.id === selectedDivision)?.label}合照 ${index + 1}`}
                className="w-auto h-auto max-h-[400px] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
          ))}
        </div>
      )}

      {/* Teams Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredTeams.map((team) => (
          <Link
            key={team.id}
            to={`/players/${team.id}?from=${selectedDivision}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center group cursor-pointer"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${team.logo}`}
                alt={`${team.name} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{team.name}</h3>
            <div className="text-sm text-gray-500 mb-2">{team.school}</div>
            <div className="inline-block px-3 py-1 bg-red-100 text-primary text-sm rounded-full">
              {divisions.find((d) => d.id === team.division)?.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Tournament Bracket */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">對戰圖</h2>

        {/* Grade 4 - Round Robin */}
        {selectedDivision === 'grade4' && (
          <div className="flex justify-center">
            <svg viewBox="0 0 400 400" className="max-w-md w-full">
              {/* Diamond shape */}
              <line x1="200" y1="50" x2="350" y2="200" stroke="#DC2626" strokeWidth="2" />
              <line x1="350" y1="200" x2="200" y2="350" stroke="#DC2626" strokeWidth="2" />
              <line x1="200" y1="350" x2="50" y2="200" stroke="#DC2626" strokeWidth="2" />
              <line x1="50" y1="200" x2="200" y2="50" stroke="#DC2626" strokeWidth="2" />

              {/* Diagonal lines */}
              <line x1="50" y1="200" x2="350" y2="200" stroke="#DC2626" strokeWidth="2" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="#DC2626" strokeWidth="2" />

              {/* Team names */}
              <text x="200" y="35" textAnchor="middle" className="fill-gray-800 font-bold text-sm">光復國小</text>
              <text x="370" y="205" textAnchor="start" className="fill-gray-800 font-bold text-sm">士林國小</text>
              <text x="200" y="375" textAnchor="middle" className="fill-gray-800 font-bold text-sm">麗山國小</text>
              <text x="30" y="205" textAnchor="end" className="fill-gray-800 font-bold text-sm">石牌國小</text>

              {/* Match numbers */}
              <text x="125" y="115" className="fill-gray-500 text-xs">(1)</text>
              <text x="275" y="115" className="fill-gray-500 text-xs">(2)</text>
              <text x="200" y="190" className="fill-gray-500 text-xs">(11)</text>
              <text x="125" y="275" className="fill-gray-500 text-xs">(31)</text>
              <text x="275" y="275" className="fill-gray-500 text-xs">(30)</text>
              <text x="275" y="35" className="fill-gray-500 text-xs">(21)</text>
            </svg>
          </div>
        )}

        {/* Grade 5 - Group Stage + Playoffs */}
        {selectedDivision === 'grade5' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Group A - Triangle */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">A組</h3>
                <svg viewBox="0 0 300 300" className="max-w-xs w-full">
                  {/* Triangle */}
                  <line x1="150" y1="50" x2="250" y2="250" stroke="#DC2626" strokeWidth="2" />
                  <line x1="250" y1="250" x2="50" y2="250" stroke="#DC2626" strokeWidth="2" />
                  <line x1="50" y1="250" x2="150" y2="50" stroke="#DC2626" strokeWidth="2" />

                  {/* Team names */}
                  <text x="150" y="35" textAnchor="middle" className="fill-gray-800 font-bold text-sm">光復國小</text>
                  <text x="260" y="255" textAnchor="start" className="fill-gray-800 font-bold text-sm">國語實小</text>
                  <text x="40" y="255" textAnchor="end" className="fill-gray-800 font-bold text-sm">石牌國小</text>

                  {/* Match numbers */}
                  <text x="205" y="145" className="fill-gray-500 text-xs">(18)</text>
                  <text x="150" y="265" className="fill-gray-500 text-xs">(10)</text>
                  <text x="95" y="145" className="fill-gray-500 text-xs">(5)</text>
                  <text x="150" y="155" className="fill-gray-500 text-xs">A</text>
                </svg>
              </div>

              {/* Group B - Diamond */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">B組</h3>
                <svg viewBox="0 0 300 300" className="max-w-xs w-full">
                  {/* Diamond */}
                  <line x1="150" y1="50" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="250" y1="150" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="250" x2="50" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="50" y1="150" x2="150" y2="50" stroke="#DC2626" strokeWidth="2" />

                  {/* Diagonal lines */}
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="50" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />

                  {/* Team names */}
                  <text x="150" y="35" textAnchor="middle" className="fill-gray-800 font-bold text-sm">麗山國小</text>
                  <text x="260" y="155" textAnchor="start" className="fill-gray-800 font-bold text-sm">三玉國小</text>
                  <text x="150" y="275" textAnchor="middle" className="fill-gray-800 font-bold text-sm">敦化國小</text>
                  <text x="40" y="155" textAnchor="end" className="fill-gray-800 font-bold text-sm">士林國小</text>

                  {/* Match numbers */}
                  <text x="120" y="90" className="fill-gray-500 text-xs">(4)</text>
                  <text x="180" y="90" className="fill-gray-500 text-xs">(7)</text>
                  <text x="150" y="140" className="fill-gray-500 text-xs">(17)</text>
                  <text x="120" y="210" className="fill-gray-500 text-xs">(24)</text>
                  <text x="180" y="210" className="fill-gray-500 text-xs">(25)</text>
                  <text x="200" y="90" className="fill-gray-500 text-xs">(13)</text>
                  <text x="150" y="160" className="fill-gray-500 text-xs">B</text>
                </svg>
              </div>
            </div>

            {/* Playoffs */}
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">淘汰賽</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次28: (A)冠 vs (B)亞</span>
                      <span className="text-gray-500">四強</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次29: (B)冠 vs (A)亞</span>
                      <span className="text-gray-500">四強</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次31: (A)3 vs (B)3</span>
                      <span className="text-gray-500">排名賽</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次34: 28敗 vs 29敗</span>
                      <span className="text-primary font-semibold">季軍戰</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-primary">
                      <span className="font-semibold">場次36: 28勝 vs 29勝</span>
                      <span className="text-primary font-bold">冠軍戰</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grade 6 - Group Stage + Playoffs */}
        {selectedDivision === 'grade6' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Group A - Diamond */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">A組</h3>
                <svg viewBox="0 0 300 300" className="max-w-xs w-full">
                  {/* Diamond */}
                  <line x1="150" y1="50" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="250" y1="150" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="250" x2="50" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="50" y1="150" x2="150" y2="50" stroke="#DC2626" strokeWidth="2" />

                  {/* Diagonal lines */}
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="50" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />

                  {/* Team names */}
                  <text x="150" y="35" textAnchor="middle" className="fill-gray-800 font-bold text-sm">光復國小</text>
                  <text x="260" y="155" textAnchor="start" className="fill-gray-800 font-bold text-sm">國語實小</text>
                  <text x="150" y="275" textAnchor="middle" className="fill-gray-800 font-bold text-sm">麗山國小</text>
                  <text x="40" y="155" textAnchor="end" className="fill-gray-800 font-bold text-sm">三興國小</text>

                  {/* Match numbers */}
                  <text x="120" y="90" className="fill-gray-500 text-xs">(3)</text>
                  <text x="180" y="90" className="fill-gray-500 text-xs">(8)</text>
                  <text x="150" y="140" className="fill-gray-500 text-xs">(16)</text>
                  <text x="120" y="210" className="fill-gray-500 text-xs">(19)</text>
                  <text x="180" y="210" className="fill-gray-500 text-xs">(22)</text>
                  <text x="200" y="90" className="fill-gray-500 text-xs">(14)</text>
                  <text x="150" y="160" className="fill-gray-500 text-xs">A</text>
                </svg>
              </div>

              {/* Group B - Diamond */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">B組</h3>
                <svg viewBox="0 0 300 300" className="max-w-xs w-full">
                  {/* Diamond */}
                  <line x1="150" y1="50" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="250" y1="150" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="250" x2="50" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="50" y1="150" x2="150" y2="50" stroke="#DC2626" strokeWidth="2" />

                  {/* Diagonal lines */}
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#DC2626" strokeWidth="2" />
                  <line x1="150" y1="50" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" />

                  {/* Team names */}
                  <text x="150" y="35" textAnchor="middle" className="fill-gray-800 font-bold text-sm">石牌國小</text>
                  <text x="260" y="155" textAnchor="start" className="fill-gray-800 font-bold text-sm">三玉國小</text>
                  <text x="150" y="275" textAnchor="middle" className="fill-gray-800 font-bold text-sm">復興實小</text>
                  <text x="40" y="155" textAnchor="end" className="fill-gray-800 font-bold text-sm">敦化國小</text>

                  {/* Match numbers */}
                  <text x="120" y="90" className="fill-gray-500 text-xs">(6)</text>
                  <text x="180" y="90" className="fill-gray-500 text-xs">(20)</text>
                  <text x="150" y="140" className="fill-gray-500 text-xs">(12)</text>
                  <text x="120" y="210" className="fill-gray-500 text-xs">(9)</text>
                  <text x="180" y="210" className="fill-gray-500 text-xs">(15)</text>
                  <text x="200" y="90" className="fill-gray-500 text-xs">(23)</text>
                  <text x="150" y="160" className="fill-gray-500 text-xs">B</text>
                </svg>
              </div>
            </div>

            {/* Playoffs */}
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">淘汰賽</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次26: (A)冠 vs (B)亞</span>
                      <span className="text-gray-500">四強</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次27: (B)冠 vs (A)亞</span>
                      <span className="text-gray-500">四強</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次32: (A)3 vs (B)3</span>
                      <span className="text-gray-500">排名賽</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span>場次35: 26敗 vs 27敗</span>
                      <span className="text-primary font-semibold">季軍戰</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-primary">
                      <span className="font-semibold">場次37: 26勝 vs 27勝</span>
                      <span className="text-primary font-bold">冠軍戰</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Teams
