import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'

export default async function FixturesPage() {
  const { data: matches } = await supabase
    .from('matches')
    .select('*')
    .order('match_date', { ascending: true })

  const upcoming = matches?.filter((m) => m.status === 'upcoming') ?? []
  const completed = matches?.filter((m) => m.status === 'completed') ?? []

  return (
    <div className="space-y-10">
      {/* text-2xl base prevents the heading from overflowing on narrow mobile viewports (Req 5.5) */}
      <h1 className="text-2xl sm:text-3xl font-black text-white">Fixtures & Results</h1>

      <Section title="Upcoming Fixtures">
        {upcoming.length ? (
          upcoming.map((m) => (
            <MatchRow key={m.id} match={m} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No upcoming fixtures.</p>
        )}
      </Section>

      <Section title="Results">
        {completed.length ? (
          completed.map((m) => (
            <MatchRow key={m.id} match={m} showScore />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No results yet.</p>
        )}
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[#f5c518] font-bold text-xs uppercase tracking-widest mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function MatchRow({ match, showScore = false }: { match: any; showScore?: boolean }) {
  const isHome = match.is_home
  const home = isHome ? 'Izinja Ze Game FC' : match.opponent
  const away = isHome ? match.opponent : 'Izinja Ze Game FC'
  const homeScore = isHome ? match.home_score : match.away_score
  const awayScore = isHome ? match.away_score : match.home_score

  // Determine result colour from our perspective
  const ourScore = isHome ? match.home_score : match.away_score
  const theirScore = isHome ? match.away_score : match.home_score
  const resultColor =
    showScore && ourScore != null
      ? ourScore > theirScore
        ? 'border-l-green-500'
        : ourScore < theirScore
        ? 'border-l-red-500'
        : 'border-l-yellow-400'
      : 'border-l-gray-700'

  return (
    <div className={`bg-gray-900 rounded-lg px-4 py-3 border-l-4 ${resultColor} flex items-center justify-between gap-4`}>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate">
          {home} <span className="text-gray-500">vs</span> {away}
        </p>
        {/* truncate prevents long venue+competition strings from breaking the row layout on mobile (Req 5.2, 5.4) */}
        <p className="text-gray-500 text-xs mt-0.5 truncate">
          {format(new Date(match.match_date), 'EEE dd MMM yyyy')}
          {match.venue ? ` · ${match.venue}` : ''}
          {match.competition ? ` · ${match.competition}` : ''}
        </p>
      </div>

      {showScore && homeScore != null && (
        <div className="text-white font-black text-lg shrink-0">
          {homeScore} – {awayScore}
        </div>
      )}
    </div>
  )
}
