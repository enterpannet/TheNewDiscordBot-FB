import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const TARGET_PCT = 90

const weeklyAttendance = [
  { week: 'W1', pct: 72 },
  { week: 'W2', pct: 85 },
  { week: 'W3', pct: 78 },
  { week: 'W4', pct: 92 },
  { week: 'W5', pct: 88 },
  { week: 'W6', pct: 90 },
  { week: 'W7', pct: 94 },
]

export function AttendanceTrendChart() {
  return (
    <div className="mt-8 h-56 w-full min-w-0 rounded-xl bg-[#f3f4f5] px-2 pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={weeklyAttendance}
          margin={{ top: 16, right: 12, left: 4, bottom: 8 }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#737685', fontWeight: 600 }}
          />
          <YAxis domain={[0, 100]} hide />
          <ReferenceLine
            y={TARGET_PCT}
            stroke="#16a34a"
            strokeDasharray="5 5"
            strokeWidth={1.5}
            label={{
              value: `${TARGET_PCT}% target`,
              position: 'insideTopRight',
              fill: '#15803d',
              fontSize: 10,
              fontWeight: 600,
            }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 61, 155, 0.06)' }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const v = payload[0].value
              const n = typeof v === 'number' ? v : Number(v)
              return (
                <div
                  className="rounded-lg border-0 bg-white px-3 py-2 text-xs shadow-lg"
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}
                >
                  <span className="font-semibold text-[#191c1d]">{n}%</span>
                  <span className="text-[#737685]"> attendance</span>
                </div>
              )
            }}
          />
          <Bar
            dataKey="pct"
            fill="#003d9b"
            fillOpacity={0.9}
            radius={[8, 8, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
