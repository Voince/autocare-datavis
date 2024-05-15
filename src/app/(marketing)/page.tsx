import Link from "next/link"
import Image from "next/image"
import { CarFrontIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
    return (
      <>
          <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
            <Link className="flex items-center gap-2 text-lg" href="#">
              <CarFrontIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
          <Button className="md:hidden" size="sm" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Streamline Your Automotive Repairs
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      AutoCare is the ultimate app for managing your automotive repair needs. Book appointments, track
                      service history, and stay informed every step of the way.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Try it for Free
                    </Link>
                  </div>
                </div>
                <Image
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="/1.jpg"
                  width="550"
                />
              </div>
            </div>
          </section>
        </main>
      </>
    );
}