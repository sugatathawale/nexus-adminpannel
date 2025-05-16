"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, ImageIcon, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const weddingStories = [
  {
    id: "1",
    coupleNames: "Sophia & James",
    date: new Date("2023-04-15"),
    location: "Sunset Beach Resort, Hawaii",
    description: "A beautiful beach wedding with close family and friends.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "2",
    coupleNames: "Emma & Noah",
    date: new Date("2023-03-22"),
    location: "Mountain View Lodge, Colorado",
    description: "A rustic mountain wedding with stunning views.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "3",
    coupleNames: "Olivia & William",
    date: new Date("2023-02-14"),
    location: "Grand Ballroom, New York",
    description: "An elegant Valentine's Day wedding in the heart of the city.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
]

export function WeddingStoriesManager() {
  const [date, setDate] = useState<Date>()

  return (
    <Tabs defaultValue="all-stories" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList className="bg-[#F5F5DC]">
          <TabsTrigger value="all-stories">All Stories</TabsTrigger>
          <TabsTrigger value="add-story">Add New Story</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all-stories" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {weddingStories.map((story) => (
            <Card key={story.id} className="bg-white overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <img
                  src={story.images[0] || "/placeholder.svg"}
                  alt={story.coupleNames}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold">{story.coupleNames}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {format(story.date, "PPP")}
                  </div>
                  <p className="text-sm">{story.location}</p>
                  <p className="text-sm line-clamp-2">{story.description}</p>
                  <div className="flex gap-1 mt-2">
                    {story.images.slice(0, 4).map((image, index) => (
                      <div key={index} className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${story.coupleNames} ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                    {story.images.length > 4 && (
                      <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-xs">
                        +{story.images.length - 4}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-600">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="add-story">
        <Card className="bg-white">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="coupleNames">Couple's Names</Label>
                  <Input id="coupleNames" placeholder="e.g. Sophia & James" className="bg-[#FFF8E7]" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
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
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Sunset Beach Resort, Hawaii" className="bg-[#FFF8E7]" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Story Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write the couple's story here..."
                    className="min-h-[120px] bg-[#FFF8E7]"
                  />
                </div>

                <div>
                  <Label>Upload Photos</Label>
                  <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="relative aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center text-muted-foreground hover:bg-[#FFF8E7] cursor-pointer">
                      <ImageIcon className="h-8 w-8 mb-1" />
                      <span className="text-xs">Add Photo</span>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>

                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md bg-muted flex items-center justify-center"
                      >
                        <img
                          src="/placeholder.svg"
                          alt={`Preview ${index}`}
                          className="object-cover w-full h-full rounded-md"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-1 right-1 h-6 w-6 rounded-full"
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#D4AF37] hover:bg-[#C4A030] text-white">Save Story</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
