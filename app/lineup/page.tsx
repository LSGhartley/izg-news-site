import { supabase } from '@/lib/supabase'
import PitchDisplay from '@/components/PitchDisplay'

export const dynamic = 'force-dynamic'

// Explicit types for the joined query result — Supabase's type inference
// doesn't resolve nested joins automatically without generated types from the CLI.
interface LineupPlayerRow {
  id: string
  lineup_id: string
  player_id: string
  position_slot: string
  x_percent: number
  y_percent: number
  players: { name: string; number: number } | null
}

interface LineupRow {
  id: string
  match_id: string
  formation: string
  published: boolean
  published_at: string | null
  matches: {
    opponent: string
    match_date: string
    is_home: boolean
    venue: string | null
    competition: string | null
  } | null
}

export default async function LineupPage() {
  const { data: lineup } = await supabase
    .from('lineups')
    .select(`id, match_id, formation, published, published_at, matches(opponent, match_date, is_home, venue, competition)`)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .returns<LineupRow[]>()
    .then((r) => ({ data: r.data?.[0] ?? null, error: r.error }))

  if (!lineup) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No lineup has been published yet.</p>
        <p className="text-gray-600 text-sm mt-2">Check back closer to match day.</p>
      </div>
    )
  }

  const { data: rawLineupPlayers } = await supabase
    .from('lineup_players')
    .select(`id, lineup_id, player_id, position_slot, x_percent, y_percent, players(name, number)`)
    .eq('lineup_id', lineup.id)
    .returns<LineupPlayerRow[]>()

  const players = (rawLineupPlayers ?? []).map((lp) => ({
    id: lp.id,
    name: lp.players?.name ?? 'Unknown',
    number: lp.players?.number ?? 0,
    position_slot: lp.position_slot,
    x_percent: Number(lp.x_percent),
    y_percent: Number(lp.y_percent),
  }))

  const match = lineup.matches

  if (!match) {
    return <p className="text-center text-gray-500 py-20">Match data unavailable.</p>
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-6">
        <p className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest mb-1">
          {match.competition ?? 'Match Day'}
        </p>
        <h1 className="text-2xl font-black text-white">
          {match.is_home ? 'Izinja Ze Game FC' : match.opponent}
          <span className="text-[#f5c518] mx-3">vs</span>
          {match.is_home ? match.opponent : 'Izinja Ze Game FC'}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {new Date(match.match_date).toLocaleDateString('en-ZA', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          })}
          {match.venue ? ` · ${match.venue}` : ''}
        </p>
      </div>

      <PitchDisplay players={players} formation={lineup.formation} />

      <div className="mt-6 grid grid-cols-2 gap-2">
        {players
          .sort((a, b) => a.number - b.number)
          .map((p) => (
            <div key={p.id} className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2">
              <span className="w-7 h-7 rounded-full bg-[#f5c518] text-[#0d1117] font-black text-xs flex items-center justify-center shrink-0">
                {p.number}
              </span>
              <span className="text-white text-sm font-medium truncate">{p.name}</span>
              <span className="ml-auto text-gray-500 text-xs">{p.position_slot.split('_')[0]}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
