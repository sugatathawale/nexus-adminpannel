"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, MapPin, Tag, X, Edit, Trash2, ImageIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const events = [
  {
    id: "1",
    title: "Wedding Ceremony",
    date: new Date("2023-06-15"),
    time: "4:00 PM",
    location: "St. Mary's Church, New York",
    description: "The main wedding ceremony with exchange of vows.",
    type: "Wedding",
    tags: ["Ceremony", "Formal"],
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Mehendi Celebration",
    date: new Date("2023-06-13"),
    time: "2:00 PM",
    location: "Garden Venue, New York",
    description: "Traditional henna application ceremony.",
    type: "Mehendi",
    tags: ["Traditional", "Cultural"],
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Reception Party",
    date: new Date("2023-06-16"),
    time: "7:00 PM",
    location: "Grand Ballroom, Hilton Hotel",
    description: "Dinner and dance celebration after the wedding.",
    type: "Reception",
    tags: ["Party", "Dinner", "Dance"],
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Haldi Ceremony",
    date: new Date("2023-06-12"),
    time: "11:00 AM",
    location: "Family Home, Queens",
    description: "Traditional turmeric application ceremony.",
    type: "Haldi",
    tags: ["Traditional", "Family"],
    image: "/placeholder.svg",
  },
]

const eventTypes = ["Wedding", "Engagement", "Reception", "Mehendi", "Haldi", "Sangeet"]

export function EventManager() {
  const [date, setDate] = useState<Date>()
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <Tabs defaultValue="all-events" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList className="bg-[#F5F5DC]">
          <TabsTrigger value="all-events">All Events</TabsTrigger>
          <TabsTrigger value="add-event">Add New Event</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all-events" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="bg-white overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 aspect-square md:aspect-auto">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="flex-1 p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{event.title}</h3>
                      <Badge variant="outline" className="bg-[#FFF8E7]">
                        {event.type}
                      </Badge>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {format(event.date, "PPP")}
                      <span className="mx-1">•</span>
                      <Clock className="mr-1 h-3 w-3" />
                      {event.time}
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <p className="text-sm line-clamp-2">{event.description}</p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-600">
                        <Trash2 className="mr-1 h-3 w-3" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="add-event">
        <Card className="bg-white">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="title">Event Title</Label>
                    <Input id="title" placeholder="e.g. Wedding Ceremony" className="bg-[#FFF8E7]" />
                  </div>

                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select>
                      <SelectTrigger className="bg-[#FFF8E7]">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label>Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-[#FFF8E7]",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="time">Event Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="time" placeholder="e.g. 4:00 PM" className="pl-8 bg-[#FFF8E7]" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="location" placeholder="e.g. St. Mary's Church" className="pl-8 bg-[#FFF8E7]" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the event details..."
                    className="min-h-[100px] bg-[#FFF8E7]"
                  />
                </div>

                <div>
                  <Label>Event Tags</Label>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Add tags (e.g. Formal, Dinner)"
                        className="pl-8 bg-[#FFF8E7]"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            addTag()
                          }
                        }}
                      />
                    </div>
                    <Button type="button" onClick={addTag} variant="outline" size="sm">
                      Add Tag
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="flex items-center gap-1 bg-[#FFF8E7]">
                        {tag}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 text-muted-foreground hover:text-foreground"
                          onClick={() => removeTag(tag)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove {tag}</span>
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Event Image</Label>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative aspect-video rounded-md border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center text-muted-foreground hover:bg-[#FFF8E7] cursor-pointer">
                      <ImageIcon className="h-8 w-8 mb-1" />
                      <span className="text-xs">Upload Event Image</span>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>

                    <div className="relative aspect-video rounded-md bg-muted hidden md:flex items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        alt="Event preview"
                        className="object-cover w-full h-full rounded-md"
                      />
                      <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-6 w-6 rounded-full">
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#D4AF37] hover:bg-[#C4A030] text-white">Save Event</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
