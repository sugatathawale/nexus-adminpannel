"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Heart, ImageIcon, Plus, ChevronRight } from "lucide-react"

// Sample data - replace with your actual data
const testimonials = [
    {
        id: 1,
        couple: "Emma & James",
        image: "/couples/couple1.jpg",
        date: "March 15, 2024",
        rating: 5,
        text: "Our wedding day was absolutely perfect! The team took care of every detail and made our special day truly unforgettable.",
        photos: [
            "/weddings/emma-james/1.jpg",
            "/weddings/emma-james/2.jpg",
            "/weddings/emma-james/3.jpg",
            "/weddings/emma-james/4.jpg",
        ],
        venue: "Crystal Garden",
        story: "A beautiful spring wedding filled with cherry blossoms and love..."
    },
    {
        id: 2,
        couple: "Sophia & William",
        image: "/couples/couple2.jpg",
        date: "February 28, 2024",
        rating: 5,
        text: "We couldn't have asked for a better experience. The attention to detail was incredible!",
        photos: [
            "/weddings/sophia-william/1.jpg",
            "/weddings/sophia-william/2.jpg",
            "/weddings/sophia-william/3.jpg",
        ],
        venue: "Grand Ballroom",
        story: "An elegant winter wonderland wedding that took everyone's breath away..."
    },
    // Add more testimonials here
]

export default function TestimonialsPage() {
    return (
        <DashboardShell>
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Wedding Stories</h1>
                        <p className="text-muted-foreground">Beautiful moments and heartfelt testimonials from our happy couples</p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Story
                    </Button>
                </div>

                <Tabs defaultValue="gallery" className="w-full">
                    <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                        <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
                        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                    </TabsList>

                    <TabsContent value="gallery" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((testimonial) => (
                                <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-[4/3] relative group cursor-pointer">
                                        <img
                                            src={testimonial.photos[0]}
                                            alt={`${testimonial.couple}'s wedding`}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button variant="secondary" className="gap-2">
                                                <ImageIcon className="h-4 w-4" />
                                                View Album
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold">{testimonial.couple}</h3>
                                        <p className="text-sm text-muted-foreground">{testimonial.venue}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="testimonials" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial) => (
                                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <Avatar className="h-16 w-16 border-2 border-accent">
                                            <AvatarImage src={testimonial.image} alt={testimonial.couple} />
                                            <AvatarFallback>{testimonial.couple.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl">{testimonial.couple}</CardTitle>
                                            <div className="flex items-center gap-1 mt-1">
                                                {Array(5).fill(0).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                                    />
                                                ))}
                                            </div>
                                            <CardDescription>{testimonial.date}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{testimonial.text}</p>
                                        <div className="mt-4 flex gap-2">
                                            {testimonial.photos.slice(0, 3).map((photo, index) => (
                                                <div key={index} className="relative aspect-square w-20 rounded-md overflow-hidden">
                                                    <img
                                                        src={photo}
                                                        alt={`${testimonial.couple}'s wedding photo ${index + 1}`}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            ))}
                                            {testimonial.photos.length > 3 && (
                                                <Button variant="outline" size="icon" className="aspect-square w-20">
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardShell>
    )
} 