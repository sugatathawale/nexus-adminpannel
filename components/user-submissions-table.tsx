"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft, ChevronRight, Eye, MoreHorizontal, Trash2, Pencil, Search, Filter, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const userSubmissions = [
  {
    id: "1",
    name: "Sophia & James",
    email: "sophia@example.com",
    eventType: "Wedding",
    date: "2023-05-12",
    status: "Approved",
  },
  {
    id: "2",
    name: "Emma & Noah",
    email: "emma@example.com",
    eventType: "Engagement",
    date: "2023-05-10",
    status: "Pending",
  },
  {
    id: "3",
    name: "Olivia & William",
    email: "olivia@example.com",
    eventType: "Reception",
    date: "2023-05-08",
    status: "Approved",
  },
  {
    id: "4",
    name: "Ava & Benjamin",
    email: "ava@example.com",
    eventType: "Mehendi",
    date: "2023-05-05",
    status: "Approved",
  },
  {
    id: "5",
    name: "Isabella & Mason",
    email: "isabella@example.com",
    eventType: "Haldi",
    date: "2023-05-03",
    status: "Pending",
  },
  {
    id: "6",
    name: "Mia & Ethan",
    email: "mia@example.com",
    eventType: "Wedding",
    date: "2023-05-01",
    status: "Rejected",
  },
  {
    id: "7",
    name: "Charlotte & Alexander",
    email: "charlotte@example.com",
    eventType: "Reception",
    date: "2023-04-28",
    status: "Approved",
  },
  {
    id: "8",
    name: "Amelia & Henry",
    email: "amelia@example.com",
    eventType: "Engagement",
    date: "2023-04-25",
    status: "Approved",
  },
]

export function UserSubmissionsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubmissions = userSubmissions.filter(
    (submission) =>
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.eventType.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Rejected":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card className="glass-card gradient-border">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search submissions..."
                className="pl-8 bg-white/10 border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-primary/20 bg-primary/5">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/90 backdrop-blur-md">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All</DropdownMenuItem>
                  <DropdownMenuItem>Wedding</DropdownMenuItem>
                  <DropdownMenuItem>Engagement</DropdownMenuItem>
                  <DropdownMenuItem>Reception</DropdownMenuItem>
                  <DropdownMenuItem>Mehendi</DropdownMenuItem>
                  <DropdownMenuItem>Haldi</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-white/20 overflow-hidden">
            <Table>
              <TableHeader className="bg-primary/5">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Event Type</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id} className="hover:bg-primary/5">
                    <TableCell className="font-medium">{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>{submission.eventType}</TableCell>
                    <TableCell>{new Date(submission.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card/90 backdrop-blur-md">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View Details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-accent">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>{filteredSubmissions.length}</strong> of{" "}
              <strong>{userSubmissions.length}</strong> results
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled className="border-primary/20 bg-primary/5">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 border-accent bg-accent/10 text-accent">
                1
              </Button>
              <Button variant="outline" size="icon" className="border-primary/20 bg-primary/5">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
