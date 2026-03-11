import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "./components/Appsidebar";
import AdminNavBar from "./components/AdminNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSideBar />
        <main className="w-full">
          <AdminNavBar />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
