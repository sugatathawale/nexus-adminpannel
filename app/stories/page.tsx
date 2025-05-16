import { DashboardShell } from "@/components/dashboard-shell"
import { WeddingStoriesManager } from "@/components/wedding-stories-manager"

export default function StoriesPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wedding Stories</h1>
          <p className="text-muted-foreground">Manage wedding stories and couple testimonials</p>
        </div>
        <WeddingStoriesManager />
      </div>
    </DashboardShell>
  )
}
