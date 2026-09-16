const DEFAULT_MESSAGES = ['Escala cuando quieras', 'Tu negocio vendiendo online']
const REPEATS = Array.from({ length: 6 })

export default function TopBar({ messages = DEFAULT_MESSAGES }: { messages?: string[] }) {
  return (
    <div className="h-11 bg-black overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 40s linear infinite' }}>
        {REPEATS.map((_, i) => (
          <span key={i} className="text-white text-sm font-semibold tracking-wide px-16">
            {messages[i % messages.length]}
          </span>
        ))}
        {REPEATS.map((_, i) => (
          <span key={`dup-${i}`} className="text-white text-sm font-semibold tracking-wide px-16" aria-hidden>
            {messages[i % messages.length]}
          </span>
        ))}
      </div>
    </div>
  )
}
