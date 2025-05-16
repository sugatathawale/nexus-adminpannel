"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Heart,
  ImageIcon,
  Calendar,
  TrendingUp,
  Sparkles,
  Zap,
  Star,
  Youtube,
  MessageSquare,
  Clock,
  ArrowRight,
  ChevronRight,
  Plus,
  BarChart3,
  PieChart,
} from "lucide-react"
import { OverviewChart } from "@/components/overview-chart"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function DashboardOverview() {
  const [activeChartTab, setActiveChartTab] = useState("line")
  const [progress, setProgress] = useState(68)

  // Simulated notifications data
  const notifications = [
    {
      id: 1,
      title: "New booking request",
      message: "Emma & Noah requested a booking for their engagement party",
      time: "10 minutes ago",
      read: false,
      type: "booking",
    },
    {
      id: 2,
      title: "New review received",
      message: "Sophia & James left a 5-star review for their wedding",
      time: "2 hours ago",
      read: true,
      type: "review",
    },
    {
      id: 3,
      title: "Payment received",
      message: "You received a payment of $2,500 from Williams Reception",
      time: "Yesterday",
      read: true,
      type: "payment",
    },
    {
      id: 4,
      title: "New message",
      message: "Charlotte & Alexander sent you a message about their upcoming event",
      time: "2 days ago",
      read: true,
      type: "message",
    },
  ]

  // Simulated testimonials data
  const testimonials = [
    {
      id: 1,
      couple: "Sophia & James",
      image: "/placeholder.svg",
      text: "Our wedding was absolutely perfect! The team took care of every detail and made our day truly special.",
      rating: 5,
      date: "May 12, 2023",
      videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      couple: "Emma & Noah",
      image: "/placeholder.svg",
      text: "We couldn't have asked for a better experience. From planning to execution, everything was flawless.",
      rating: 5,
      date: "April 28, 2023",
      videoLink: null,
    },
    {
      id: 3,
      couple: "Olivia & William",
      image: "/placeholder.svg",
      text: "The attention to detail was incredible. Our guests are still talking about how beautiful everything was!",
      rating: 4,
      date: "April 15, 2023",
      videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]

  // Quick actions
  const quickActions = [
    { title: "Add New Event", icon: Calendar, color: "bg-accent/10 text-accent" },
    { title: "Upload Photos", icon: ImageIcon, color: "bg-primary/10 text-primary" },
    { title: "Create Story", icon: Heart, color: "bg-pink-500/10 text-pink-500" },
    { title: "Send Invites", icon: MessageSquare, color: "bg-emerald-500/10 text-emerald-500" },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Header and Quick Stats */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome to WEDMIN</h1>
            <p className="text-muted-foreground">Your ultimate wedding management platform</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Sparkles className="mr-2 h-4 w-4" />
            Create New Event
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="glass-card stat-card overflow-hidden hover:shadow-lg cursor-pointer transition-all duration-300 border-0"
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="font-medium">{action.title}</div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-card stat-card overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-3xl flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card stat-card overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-3xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Events Submitted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">324</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +18% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card stat-card overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-3xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Wedding Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">86</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +7% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card stat-card overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-3xl flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-accent" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,845</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +24% from last month
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Chart Section with Tabs */}
        <Card className="glass-card gradient-border col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>User submissions and event registrations</CardDescription>
            </div>
            <Tabs defaultValue="line" className="w-[200px]" onValueChange={setActiveChartTab}>
              <TabsList className="grid w-full grid-cols-2 h-8">
                <TabsTrigger value="line" className="text-xs flex items-center gap-1">
                  <BarChart3 className="h-3 w-3" /> Activity
                </TabsTrigger>
                <TabsTrigger value="pie" className="text-xs flex items-center gap-1">
                  <PieChart className="h-3 w-3" /> Distribution
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <OverviewChart type={activeChartTab} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">68%</span> of yearly target reached
            </div>
            <div className="w-1/2">
              <Progress value={progress} className="h-2" />
            </div>
            <Button variant="outline" size="sm" className="h-8 border-primary/20 bg-primary/5">
              <Zap className="mr-1 h-3 w-3 text-primary" />
              Full Report
            </Button>
          </CardFooter>
        </Card>

        {/* Notifications Feed */}
        <Card className="glass-card gradient-border row-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Notifications</CardTitle>
              <Badge variant="outline" className="bg-accent/10 text-accent">
                {notifications.filter((n) => !n.read).length} New
              </Badge>
            </div>
            <CardDescription>Recent activity and updates</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex gap-3 p-3 rounded-lg transition-all hover:bg-primary/5 border ${notification.read ? "border-primary/10" : "border-accent/30 bg-accent/5"}`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      notification.type === "booking"
                        ? "bg-accent/10 text-accent"
                        : notification.type === "review"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : notification.type === "payment"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-primary/10 text-primary"
                    }`}
                  >
                    {notification.type === "booking" ? (
                      <Calendar className="h-4 w-4" />
                    ) : notification.type === "review" ? (
                      <Star className="h-4 w-4" />
                    ) : notification.type === "payment" ? (
                      <Zap className="h-4 w-4" />
                    ) : (
                      <MessageSquare className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      {!notification.read && <div className="h-2 w-2 rounded-full bg-accent"></div>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full border-primary/20 bg-primary/5">
              View All Notifications
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        {/* Upcoming Events */}
        <Card className="glass-card gradient-border col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled for the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {i === 1 ? (
                      <Heart className="h-6 w-6" />
                    ) : i === 2 ? (
                      <Calendar className="h-6 w-6" />
                    ) : (
                      <Sparkles className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">
                      {i === 1 ? "Johnson Wedding" : i === 2 ? "Smith Engagement Party" : "Williams Reception"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {i === 1 ? "May 15, 2023" : i === 2 ? "May 18, 2023" : "May 22, 2023"} •{" "}
                      {i === 1 ? "Grand Ballroom" : i === 2 ? "Garden Venue" : "Beach Resort"}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full border-primary/20 bg-primary/5">
              View All Events
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        {/* Client Testimonials */}
        <Card className="glass-card gradient-border col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Client Testimonials</CardTitle>
              <CardDescription>What our clients are saying</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="h-8 border-primary/20 bg-primary/5">
              <Plus className="mr-1 h-3 w-3" />
              Add Review
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-accent/20">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.couple} />
                      <AvatarFallback className="bg-accent/20 text-accent">
                        {testimonial.couple.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{testimonial.couple}</h4>
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < testimonial.rating ? "text-yellow-500" : "text-muted-foreground/30"}`}
                            />
                          ))}
                        <span className="text-xs text-muted-foreground ml-1">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-3">{testimonial.text}</p>
                  {testimonial.videoLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-auto w-full border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
                    >
                      <Youtube className="mr-1 h-3 w-3" />
                      Watch Video
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full border-primary/20 bg-primary/5">
              View All Testimonials
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
