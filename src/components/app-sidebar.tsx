"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  BotIcon,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  Image,
  Images,
  Layers,
  Map,
  PieChart,
  Settings,
  Settings2,
  Sparkles,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Generer une image",
    url: "/image-generation",
    icon: Image,
  },
  {
    title: "Mes modèles",
    url: "/models",
    icon: Frame,
  },
  {
    title: "Train un modèle",
    url: "/model-training",
    icon: Layers,
  },
  {
    title: "Mes Images",
    url: "/images",
    icon: Images,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Parametres",
    url: "/account-settings",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkles className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Magix AI</span>
            <span className="truncate text-xs">Pro</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
