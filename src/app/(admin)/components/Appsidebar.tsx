import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Shirt,
  User,
  ShoppingBasket,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const applicationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const productMenuGroup = [
  {
    title: "See All Products",
    url: "#",
    icon: Shirt,
  },
  {
    title: "Add Product",
    url: "#",
    icon: Plus,
  },
  {
    title: "Add Category",
    url: "#",
    icon: Plus,
  },
];

const userMenuGroup = [
  {
    title: "See All Users",
    url: "#",
    icon: User,
  },
  {
    title: "Add User",
    url: "#",
    icon: Plus,
  },
];
const orderGroup = [
  {
    title: "See All Transactions",
    url: "#",
    icon: ShoppingBasket,
  },
  {
    title: "See All Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "New Order",
    url: "#",
    icon: Plus,
  },
];

export default function AppSideBar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="pt-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem className="">
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="lama commerce"
                  width={30}
                  height={30}
                />
                Lama Commerce
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Products</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {productMenuGroup.map((menu) => (
                <SidebarMenuItem key={menu.title}>
                  <SidebarMenuButton asChild>
                    <Link href={menu.url}>
                      <menu.icon />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Users</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {userMenuGroup.map((menu) => (
                <SidebarMenuItem key={menu.title}>
                  <SidebarMenuButton asChild>
                    <Link href={menu.url}>
                      <menu.icon />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">
            Orders/Payments
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
				{orderGroup.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild>
							<Link href={item.url}>
								<item.icon/>
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
            <SidebarMenuButton>
              <User2 /> Username
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
