import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "./components/Appsidebar";
import AdminNavBar from "./components/AdminNavbar";
import { ThemeProvider } from "../providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSideBar />
          <main className="w-full">
            <AdminNavBar />
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
