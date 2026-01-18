export interface Rankings {
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

export interface Match {
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

export interface ScheduleData {
  rankings: Rankings
  matches: Match[]
}
