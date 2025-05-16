import { DashboardShell } from "@/components/dashboard-shell"
import { PhotoGalleryManager } from "@/components/photo-gallery-manager"

export default function GalleryPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Photo Gallery</h1>
          <p className="text-muted-foreground">Manage wedding photos by category</p>
        </div>
        <PhotoGalleryManager />
      </div>
    </DashboardShell>
  )
}
