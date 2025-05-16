"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TopNav } from "@/components/top-nav"
import { LayoutDashboard, Users, Heart, ImageIcon, Calendar, Settings, LogOut, Sparkles } from "lucide-react"
import Link from "next/link"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      isActive: pathname === "/",
    },
    {
      title: "User Submissions",
      icon: Users,
      href: "/users",
      isActive: pathname === "/users",
    },
    {
      title: "Wedding Stories",
      icon: Heart,
      href: "/stories",
      isActive: pathname === "/stories",
    },
    {
      title: "Photo Gallery",
      icon: ImageIcon,
      href: "/gallery",
      isActive: pathname === "/gallery",
    },
    {
      title: "Event Management",
      icon: Calendar,
      href: "/events",
      isActive: pathname === "/events",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      isActive: pathname === "/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-[#b9a591] bg-gradient-to-br from-[#b9a591] to-[#a08778]">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar className="border-r border-[#8a7566]/20">
            <SidebarHeader className="px-4 py-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">Nexus</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                          <Link href={item.href}>
                            <item.icon className="h-5 w-5" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-red-400 hover:text-red-300">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
