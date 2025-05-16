"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ImageIcon, Plus, Search, Filter, MoreHorizontal, Trash2, Edit, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const galleryCategories = ["All", "Landscape", "Portrait", "Candid"]

const galleryImages = [
  {
    id: "1",
    src: "/placeholder.svg",
    category: "Landscape",
    tags: ["Wedding", "Outdoor"],
  },
  {
    id: "2",
    src: "/placeholder.svg",
    category: "Portrait",
    tags: ["Couple", "Formal"],
  },
  {
    id: "3",
    src: "/placeholder.svg",
    category: "Candid",
    tags: ["Reception", "Dance"],
  },
  {
    id: "4",
    src: "/placeholder.svg",
    category: "Landscape",
    tags: ["Venue", "Decoration"],
  },
  {
    id: "5",
    src: "/placeholder.svg",
    category: "Portrait",
    tags: ["Family", "Group"],
  },
  {
    id: "6",
    src: "/placeholder.svg",
    category: "Candid",
    tags: ["Ceremony", "Emotional"],
  },
  {
    id: "7",
    src: "/placeholder.svg",
    category: "Landscape",
    tags: ["Beach", "Sunset"],
  },
  {
    id: "8",
    src: "/placeholder.svg",
    category: "Portrait",
    tags: ["Bride", "Solo"],
  },
  {
    id: "9",
    src: "/placeholder.svg",
    category: "Candid",
    tags: ["Party", "Fun"],
  },
  {
    id: "10",
    src: "/placeholder.svg",
    category: "Landscape",
    tags: ["Garden", "Flowers"],
  },
  {
    id: "11",
    src: "/placeholder.svg",
    category: "Portrait",
    tags: ["Groom", "Solo"],
  },
  {
    id: "12",
    src: "/placeholder.svg",
    category: "Candid",
    tags: ["Food", "Cake"],
  },
]

export function PhotoGalleryManager() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredImages = galleryImages.filter(
    (image) =>
      (activeCategory === "All" || image.category === activeCategory) &&
      (searchTerm === "" || image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
  )

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by tags..."
                className="pl-8 bg-[#FFF8E7]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button className="bg-[#D4AF37] hover:bg-[#C4A030] text-white">
                <Plus className="mr-1 h-4 w-4" />
                <span>Upload Photos</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="All" onValueChange={setActiveCategory}>
            <TabsList className="bg-[#F5F5DC] w-full justify-start">
              {galleryCategories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {filteredImages.map((image) => (
                  <div key={image.id} className="group relative aspect-square rounded-md overflow-hidden bg-muted">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={`Gallery image ${image.id}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              <span>Download</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {image.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-white/20 text-white border-none text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="relative aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center text-muted-foreground hover:bg-[#FFF8E7] cursor-pointer">
                  <ImageIcon className="h-8 w-8 mb-1" />
                  <span className="text-xs">Add Photo</span>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
