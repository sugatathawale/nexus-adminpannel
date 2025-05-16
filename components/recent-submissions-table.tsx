"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const recentSubmissions = [
  {
    id: "1",
    name: "Sophia & James",
    email: "sophia@example.com",
    eventType: "Wedding",
    date: "2023-05-12",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Emma & Noah",
    email: "emma@example.com",
    eventType: "Engagement",
    date: "2023-05-10",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Olivia & William",
    email: "olivia@example.com",
    eventType: "Reception",
    date: "2023-05-08",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Ava & Benjamin",
    email: "ava@example.com",
    eventType: "Mehendi",
    date: "2023-05-05",
    image: "/placeholder.svg",
  },
]

export function RecentSubmissionsTable() {
  return (
    <div className="space-y-4">
      <div className="rounded-md">
        <div className="p-1">
          <div className="grid gap-3">
            {recentSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between gap-4 p-3 rounded-lg transition-all hover:bg-primary/5 border border-primary/10"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border-2 border-accent/20">
                    <AvatarImage src={submission.image || "/placeholder.svg"} alt={submission.name} />
                    <AvatarFallback className="bg-accent/20 text-accent">
                      {submission.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{submission.name}</div>
                    <div className="text-xs text-muted-foreground">{submission.eventType}</div>
                  </div>
                </div>
                <div className="hidden md:block text-sm text-muted-foreground">
                  {new Date(submission.date).toLocaleDateString()}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 rounded-full bg-accent/10 text-accent hover:bg-accent/20"
                >
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          className="text-xs border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
        >
          View All Submissions
        </Button>
      </div>
    </div>
  )
}
