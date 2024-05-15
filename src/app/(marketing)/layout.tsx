export default function MarketingLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="h-full">
            <section>
                {children}
            </section>
        </div>
    );
}