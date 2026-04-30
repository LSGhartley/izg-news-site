import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// NOTE: Lazy singleton pattern — createClient validates the URL immediately on
// construction and throws if it's a placeholder. Deferring instantiation to the
// first actual call prevents `next build` from failing when env vars aren't set.
let _instance: ReturnType<typeof createClient<Database>> | null = null

export function getSupabaseClient() {
  if (!_instance) {
    _instance = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  return _instance
}

// Re-export as `supabase` so all existing page imports work without changes.
// The Proxy forwards every property access to the lazily-created client.
export const supabase = new Proxy({} as ReturnType<typeof createClient<Database>>, {
  get(_target, prop: string) {
    return (getSupabaseClient() as any)[prop]
  },
})
