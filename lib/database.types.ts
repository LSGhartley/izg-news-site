// NOTE: Hand-written to match the GenericSchema shape required by @supabase/supabase-js v2.
// The Relationships array is typed as any[] because we don't use foreign-key joins
// through the type system — all joins are done via explicit select strings.

export type Database = {
  public: {
    Tables: {
      players: {
        Row: {
          id: string
          name: string
          number: number
          position: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          number: number
          position: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          number?: number
          position?: string
          created_at?: string
        }
        Relationships: any[]
      }
      matches: {
        Row: {
          id: string
          opponent: string
          match_date: string
          home_score: number | null
          away_score: number | null
          is_home: boolean
          venue: string | null
          competition: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          opponent: string
          match_date: string
          home_score?: number | null
          away_score?: number | null
          is_home?: boolean
          venue?: string | null
          competition?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          opponent?: string
          match_date?: string
          home_score?: number | null
          away_score?: number | null
          is_home?: boolean
          venue?: string | null
          competition?: string | null
          status?: string
          created_at?: string
        }
        Relationships: any[]
      }
      lineups: {
        Row: {
          id: string
          match_id: string
          formation: string
          published: boolean
          published_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          match_id: string
          formation?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          match_id?: string
          formation?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
        }
        Relationships: any[]
      }
      lineup_players: {
        Row: {
          id: string
          lineup_id: string
          player_id: string
          position_slot: string
          x_percent: number
          y_percent: number
        }
        Insert: {
          id?: string
          lineup_id: string
          player_id: string
          position_slot: string
          x_percent: number
          y_percent: number
        }
        Update: {
          id?: string
          lineup_id?: string
          player_id?: string
          position_slot?: string
          x_percent?: number
          y_percent?: number
        }
        Relationships: any[]
      }
      articles: {
        Row: {
          id: string
          title: string
          body: string
          category: string
          match_id: string | null
          published: boolean
          published_at: string | null
          ai_generated: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          body: string
          category?: string
          match_id?: string | null
          published?: boolean
          published_at?: string | null
          ai_generated?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          body?: string
          category?: string
          match_id?: string | null
          published?: boolean
          published_at?: string | null
          ai_generated?: boolean
          created_at?: string
        }
        Relationships: any[]
      }
      ai_generation_log: {
        Row: {
          id: string
          generated_date: string
          match_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          generated_date?: string
          match_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          generated_date?: string
          match_id?: string | null
          created_at?: string
        }
        Relationships: any[]
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
  }
}
