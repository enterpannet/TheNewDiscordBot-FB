import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/** Hours per day — matches Figma tooltip targets; Tue column is emphasized. */
const laborData = [
  { day: 'Mon', hours: 124 },
  { day: 'Tue', hours: 164 },
  { day: 'Wed', hours: 140 },
  { day: 'Thu', hours: 152 },
  { day: 'Fri', hours: 130 },
  { day: 'Sat', hours: 145 },
  { day: 'Sun', hours: 98 },
] as const

const BAR_PRIMARY = '#003d9b'
const BAR_MUTED = '#e1e3e4'
/** Figma: Tue bar = primary; Wed label = primary in axis. */
const HIGHLIGHT_BAR_INDEX = 1
const HIGHLIGHT_LABEL_INDEX = 2

export function LaborChart() {
  return (
    <div className="rounded-[40px] bg-[#f3f4f5] p-10 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-manrope text-2xl font-bold text-[#191c1d]">
            Weekly Labor Distribution
          </h3>
          <p className="font-inter mt-1 text-sm text-[#525f73]">
            Aggregate staff hours by department
          </p>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-white px-3 py-1 text-[#003d9b] shadow-sm">Daily</span>
          <span className="rounded-lg px-3 py-1 text-[#737685]">Weekly</span>
        </div>
      </div>

      <div className="h-[288px] w-full min-w-0 px-2 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...laborData]}
            margin={{ top: 8, right: 4, left: 4, bottom: 4 }}
            barCategoryGap="18%"
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={(props) => {
                const { x, y, payload, index } = props
                const labelIndex = index ?? 0
                const fill = labelIndex === HIGHLIGHT_LABEL_INDEX ? BAR_PRIMARY : '#737685'
                return (
                  <text
                    x={x}
                    y={y}
                    dy={14}
                    textAnchor="middle"
                    fill={fill}
                    className="font-inter text-[10px] font-semibold uppercase tracking-wide"
                  >
                    {payload.value}
                  </text>
                )
              }}
            />
            <YAxis domain={[0, 180]} hide />
            <Tooltip
              cursor={{ fill: 'rgba(0, 61, 155, 0.06)' }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                const row = payload[0].payload as (typeof laborData)[number]
                return (
                  <div className="rounded-md bg-[#2e3132] px-3 py-2 font-inter text-[10px] text-white shadow-lg">
                    <span className="font-normal">{row.hours}h</span>
                  </div>
                )
              }}
            />
            <Bar dataKey="hours" radius={[16, 16, 0, 0]} maxBarSize={56}>
              {laborData.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === HIGHLIGHT_BAR_INDEX ? BAR_PRIMARY : BAR_MUTED}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
