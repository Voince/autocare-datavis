import Header from "@/components/layout/Header";

export default function ClientLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
             <body>
                <div className="flex flex-col h-screen bg-muted/40">
                    <div className="pt-4 ">
                        <Header />
                    </div>
                    <main className="flex-grow overflow-auto">
                    {children}
                    </main>
                </div>
            </body>
        </html>
    );
}