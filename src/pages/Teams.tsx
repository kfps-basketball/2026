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
    </div>
  )
}

export default Teams
