import Link from 'next/link'
import { format } from 'date-fns'
import type { Database } from '@/lib/database.types'

type Article = Database['public']['Tables']['articles']['Row']

interface Props {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: Props) {
  const categoryLabel: Record<string, string> = {
    news: 'Club News',
    match_report: 'Match Report',
    lineup: 'Team Lineup',
  }

  const categoryColor: Record<string, string> = {
    news: 'bg-blue-600',
    match_report: 'bg-[#1a5c2a]',
    lineup: 'bg-[#f5c518] text-[#0d1117]',
  }

  return (
    <Link href={`/news/${article.id}`}>
      <article
        className={`group rounded-xl border border-gray-800 bg-gray-900 hover:border-[#f5c518] transition-all overflow-hidden ${
          featured ? 'md:flex' : ''
        }`}
      >
        {/* Colour band at top acts as a visual category indicator */}
        <div className={`h-1 w-full ${categoryColor[article.category] ?? 'bg-gray-600'}`} />

        <div className={`p-5 ${featured ? 'md:p-8' : ''}`}>
          <span
            className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3 ${
              categoryColor[article.category] ?? 'bg-gray-700'
            }`}
          >
            {categoryLabel[article.category] ?? article.category}
          </span>

          {article.ai_generated && (
            <span className="ml-2 inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3 bg-purple-700 text-white">
              AI Generated
            </span>
          )}

          <h2
            className={`font-bold text-white group-hover:text-[#f5c518] transition-colors leading-snug ${
              featured ? 'text-2xl mb-3' : 'text-base mb-2'
            }`}
          >
            {article.title}
          </h2>

          <p className="text-gray-400 text-sm line-clamp-3">
            {article.body.slice(0, 200)}…
          </p>

          <p className="text-gray-600 text-xs mt-4">
            {article.published_at
              ? format(new Date(article.published_at), 'dd MMM yyyy')
              : 'Draft'}
          </p>
        </div>
      </article>
    </Link>
  )
}
