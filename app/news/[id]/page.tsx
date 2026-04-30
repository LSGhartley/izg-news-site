import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ id: string }>
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .eq('published', true)
    .single()

  if (!article) notFound()

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/news" className="text-[#f5c518] text-sm hover:underline mb-6 inline-block">
        ← Back to News
      </Link>

      <div className="mb-4 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#1a5c2a] text-white capitalize">
          {article.category.replace('_', ' ')}
        </span>
        {article.ai_generated && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-700 text-white">
            AI Generated
          </span>
        )}
        {article.published_at && (
          <span className="text-gray-500 text-xs">
            {format(new Date(article.published_at), 'dd MMMM yyyy')}
          </span>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
        {article.title}
      </h1>

      {/* Render body preserving paragraph breaks */}
      <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-4">
        {article.body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  )
}
