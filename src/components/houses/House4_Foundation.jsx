export default function House4_Foundation() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-10">
            <h2 className="text-5xl font-bold mb-10 text-foreground">Foundation & Roots</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl">
                <div className="flex-1">
                    <h3 className="text-3xl font-semibold mb-4 text-primary">My Workspace</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                        A glimpse into where the magic happens. My setup is designed for focus, creativity, and comfort.
                    </p>
                    <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">Workspace Image Placeholder</span>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl font-semibold mb-4 text-primary">Core Values</h3>
                    <ul className="space-y-4 text-lg text-muted-foreground">
                        <li>🌱 Continuous Growth</li>
                        <li>🤝 Authentic Connection</li>
                        <li>💡 Creative Problem Solving</li>
                        <li>⚖️ Work-Life Harmony</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
