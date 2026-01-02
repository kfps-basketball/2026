import { useParams, Link, useSearchParams } from 'react-router-dom'
import playersData from '../data/players.json'
import teamsData from '../data/teams.json'

function PlayersByTeam() {
  const { teamId } = useParams<{ teamId: string }>()
  const [searchParams] = useSearchParams()
  const fromDivision = searchParams.get('from') || 'grade6'

  const team = teamsData.teams.find((t) => t.id === Number(teamId))
  const teamPlayers = playersData.players.filter((p) => p.teamId === Number(teamId))

  if (!team) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">找不到該隊伍</h1>
        <Link to={`/teams?division=${fromDivision}`} className="text-primary hover:underline">
          返回參賽隊伍
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        to={`/teams?division=${fromDivision}`}
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
        返回參賽隊伍
      </Link>

      {/* Team Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}${team.logo}`}
              alt={`${team.name} logo`}
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">{team.name}</h1>
            <p className="text-gray-600">{team.school}</p>
          </div>
        </div>
      </div>

      {/* Players Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-3 text-left">背號</th>
                <th className="px-6 py-3 text-left">姓名</th>
                <th className="px-6 py-3 text-left">位置</th>
                <th className="px-6 py-3 text-left">年級</th>
              </tr>
            </thead>
            <tbody>
              {teamPlayers.map((player, index) => (
                <tr
                  key={player.id}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    #{player.number}
                  </td>
                  <td className="px-6 py-4">{player.name}</td>
                  <td className="px-6 py-4">{player.position}</td>
                  <td className="px-6 py-4">{player.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {teamPlayers.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            此隊伍暫無球員資料
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-gray-600">
        共 {teamPlayers.length} 位球員
      </div>
    </div>
  )
}

export default PlayersByTeam
