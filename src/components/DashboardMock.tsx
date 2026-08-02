"use client";

const BARS = [42, 68, 55, 88, 64, 96, 74, 58, 82, 70];

export default function DashboardMock({
  accent,
  compact = false,
}: {
  accent: string;
  compact?: boolean;
}) {
  return (
    <div className="pointer-events-none relative select-none overflow-hidden rounded-2xl border border-white/8 bg-[#0b0b0f]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 h-4 flex-1 rounded-md bg-white/[0.04] px-2 text-[9px] leading-4 text-zinc-500">
          app.dashboard / overview
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-16 flex-col items-center gap-3 border-r border-white/5 py-4 sm:flex">
          <span
            className="h-2 w-2 rounded-sm"
            style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
          />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-1.5 w-6 rounded-full bg-white/10"
            />
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 space-y-3 p-4">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "Requests", value: "2.4k" },
              { label: "Accuracy", value: "91%" },
              { label: "Latency", value: "120ms" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/6 bg-white/[0.03] p-2.5"
              >
                <div className="text-[8px] uppercase tracking-wider text-zinc-500">
                  {s.label}
                </div>
                <div
                  className="mt-1 font-display text-sm font-bold"
                  style={{ color: accent }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-white/6 bg-white/[0.03] p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[9px] font-medium text-zinc-400">
                Inference Activity
              </div>
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className={`flex items-end gap-1.5 ${compact ? "h-14" : "h-20"}`}>
              {BARS.map((h, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="w-full rounded-sm transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background:
                        i % 3 === 2
                          ? `linear-gradient(180deg, ${accent}, #2f0000)`
                          : "rgba(255,255,255,0.12)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Table rows */}
          {!compact && (
            <div className="space-y-1.5">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="h-1.5 w-1/3 rounded-full bg-white/12" />
                  <span className="ml-auto h-1.5 w-8 rounded-full bg-white/8" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
