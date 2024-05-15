import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const links =[
  {
    label: 'Home',
    path: '/home',  
    icon: 'HomeIcon',
  },
  {
    label: 'Repair Orders',
    path: '/repair-orders',
    icon: 'Wrench',
  },
  {
    label: 'Employees',
    path: '/employees',
    icon: 'UsersIcon',
  },
  {
    label: 'Kanban Board',
    path: '/kanban',
    icon: 'Kanban',
  },
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar links={links}/>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <Header />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
