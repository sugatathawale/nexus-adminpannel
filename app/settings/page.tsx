import { DashboardShell } from "@/components/dashboard-shell"
import { AdminSettings } from "@/components/admin-settings"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
          <p className="text-muted-foreground">Manage your profile and account settings</p>
        </div>
        <AdminSettings />
      </div>
    </DashboardShell>
  )
}
