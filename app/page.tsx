import { supabase } from '@/lib/supabase'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

// Force dynamic rendering — this page fetches live data from Supabase on every request.
// Static generation is not viable here because content changes frequently.
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(7)

  const { data: nextMatch } = await supabase
    .from('matches')
    .select('*')
    .eq('status', 'upcoming')
    .order('match_date', { ascending: true })
    .limit(1)
    .single()

  const featured = articles?.[0]
  const rest = articles?.slice(1) ?? []

  return (
    <div className="space-y-10">
      {/* Next fixture banner */}
      {nextMatch && (
        <div className="rounded-xl bg-[#1a5c2a] border border-[#f5c518] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#f5c518] text-xs font-semibold uppercase tracking-widest mb-1">
              Next Match · {nextMatch.competition}
            </p>
            <p className="text-white text-xl font-bold">
              Izinja Ze Game FC vs {nextMatch.opponent}
            </p>
            <p className="text-gray-300 text-sm mt-1">
              {new Date(nextMatch.match_date).toLocaleDateString('en-ZA', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
              })}
              {nextMatch.venue ? ` · ${nextMatch.venue}` : ''}
            </p>
          </div>
          <Link
            href="/lineup"
            className="shrink-0 bg-[#f5c518] text-[#0d1117] font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            View Lineup
          </Link>
        </div>
      )}

      {/* Featured article */}
      {featured && (
        <section>
          <h2 className="text-[#f5c518] font-bold text-xs uppercase tracking-widest mb-3">
            Top Story
          </h2>
          <ArticleCard article={featured} featured />
        </section>
      )}

      {/* Latest news grid */}
      {rest.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#f5c518] font-bold text-xs uppercase tracking-widest">
              Latest News
            </h2>
            <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}

      {!articles?.length && (
        <p className="text-center text-gray-500 py-20">No articles published yet.</p>
      )}
    </div>
  )
}
