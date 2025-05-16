import { DashboardShell } from "@/components/dashboard-shell"
import { EventManager } from "@/components/event-manager"

export default function EventsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Event Management</h1>
          <p className="text-muted-foreground">Create and manage wedding events and ceremonies</p>
        </div>
        <EventManager />
      </div>
    </DashboardShell>
  )
}
