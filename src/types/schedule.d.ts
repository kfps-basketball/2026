declare module '../data/schedule.json' {
  interface Rankings {
    五年級: {
      champion: string
      runnerUp: string
      third: string
    }
    六年級: {
      champion: string
      runnerUp: string
      third: string
    }
  }

  interface Match {
    id: number
    day: number
    date: string
    time: string
    division: string
    isEvent?: boolean
    teamA?: string
    teamB?: string
    scoreA?: number | null
    scoreB?: number | null
  }

  interface ScheduleData {
    rankings: Rankings
    matches: Match[]
  }

  const data: ScheduleData
  export default data
}
