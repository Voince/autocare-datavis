import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({children}: {children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <div>
                {children}
            </div>
        </ClerkProvider>
    );
}