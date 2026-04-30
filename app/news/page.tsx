import { supabase } from '@/lib/supabase'
import ArticleCard from '@/components/ArticleCard'

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-2">Club News</h1>
      <p className="text-gray-400 mb-8">Latest updates from Izinja Ze Game FC</p>

      {articles?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-20">No articles published yet.</p>
      )}
    </div>
  )
}
