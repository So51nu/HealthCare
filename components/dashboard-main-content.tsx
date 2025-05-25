import { AnatomySection } from "@/components/anatomy-section"
import { CalendarView } from "@/components/calendar-view"
import { UpcomingSchedule } from "@/components/upcoming-schedule"
import { ActivityFeed } from "@/components/activity-feed"

export function DashboardMainContent() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Left Column - Anatomy Section */}
        <div className="lg:col-span-1">
          <AnatomySection />
        </div>

        {/* Middle Column - Calendar */}
        <div className="lg:col-span-1">
          <CalendarView />
        </div>

        {/* Right Column - Schedule and Activity */}
        <div className="lg:col-span-1 space-y-6">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  )
}
