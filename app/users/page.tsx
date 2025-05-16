import { DashboardShell } from "@/components/dashboard-shell"
import { UserSubmissionsTable } from "@/components/user-submissions-table"

export default function UsersPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Submissions</h1>
          <p className="text-muted-foreground">Manage user event registration submissions</p>
        </div>
        <UserSubmissionsTable />
      </div>
    </DashboardShell>
  )
}
