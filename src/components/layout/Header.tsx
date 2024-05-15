"use client";

import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { ModeToggle } from "../component/mode-toggle";
import { PanelLeftIcon, Package2Icon, HomeIcon, ShoppingCartIcon, PackageIcon, UsersIcon, LineChartIcon } from "lucide-react";
import { SheetTrigger, SheetContent, Sheet} from "../ui/sheet";
import BreadCrumb from "../component/BreadCrumb";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";



export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                <Button className="sm:hidden" size="icon" variant="outline">
                    <PanelLeftIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent className="sm:max-w-xs" side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        href="#"
                        >
                        <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                        <HomeIcon className="h-5 w-5" />
                        Dashboard
                        </Link>
                        <Link className="flex items-center gap-4 px-2.5 text-foreground" href="#">
                        <ShoppingCartIcon className="h-5 w-5" />
                        Orders
                        </Link>
                        <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                        <PackageIcon className="h-5 w-5" />
                        Products
                        </Link>
                        <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                        <UsersIcon className="h-5 w-5" />
                        Customers
                        </Link>
                        <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                        <LineChartIcon className="h-5 w-5" />
                        Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
          
            <BreadCrumb />
            
            <div className="relative ml-auto flex-1 md:grow-0">
            </div>

            <Button>
            <OrganizationSwitcher 
                hidePersonal
                afterCreateOrganizationUrl="/organization/:id"
                afterLeaveOrganizationUrl="/select-org"
                afterSelectOrganizationUrl="/organization/:id"
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                }}
            />
            </Button>
            
            <UserButton 
                afterSignOutUrl="/"
                appearance={{
                    elements:{
                        avatarBox: {
                            height: "30",
                            width: "30",
                        }
                    }
                }}
            />
            <ModeToggle />
        </header>
    );
}