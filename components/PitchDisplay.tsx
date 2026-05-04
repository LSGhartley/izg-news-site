'use client'

// Read-only pitch view for the news site.
// Positions are stored as x/y percentages so the layout is formation-agnostic.

interface Player {
  id: string
  name: string
  number: number
  position_slot: string
  x_percent: number
  y_percent: number
}

interface Props {
  players: Player[]
  formation: string
}

export default function PitchDisplay({ players, formation }: Props) {
  return (
    <div className="w-full">
      <p className="text-center text-[#f5c518] font-bold text-lg mb-4">
        Formation: {formation}
      </p>

      {/* Pitch container — aspect ratio locks the visual proportions of a real pitch */}
      <div
        className="relative w-full bg-[#2d6a3f] rounded-xl overflow-hidden border-2 border-[#f5c518]"
        style={{ aspectRatio: '7 / 10' }}
      >
        {/* Pitch markings */}
        <PitchMarkings />

        {/* Player tokens positioned absolutely using stored percentages */}
        {players.map((p) => (
          <div
            key={p.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: `${p.x_percent}%`, top: `${p.y_percent}%` }}
          >
            {/* Responsive token size: 28px base on mobile meets the 28px minimum (Req 8.3), scaling up at sm/lg breakpoints */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-[#f5c518] border-2 border-white flex items-center justify-center text-[#0d1117] font-black shadow-lg text-[10px] sm:text-xs">
              {p.number}
            </div>
            <span className="mt-1 text-white text-[10px] font-semibold text-center leading-tight max-w-[60px] drop-shadow">
              {p.name.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PitchMarkings() {
  return (
    <>
      {/* Centre circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square rounded-full border border-white/30" />
      {/* Centre line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
      {/* Centre dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/50" />
      {/* Top penalty box */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-[18%] border border-white/30 border-t-0" />
      {/* Bottom penalty box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[55%] h-[18%] border border-white/30 border-b-0" />
      {/* Top goal box */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[28%] h-[8%] border border-white/30 border-t-0" />
      {/* Bottom goal box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[28%] h-[8%] border border-white/30 border-b-0" />
    </>
  )
}
