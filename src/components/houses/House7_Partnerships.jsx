export default function House7_Partnerships() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-10">
            <h2 className="text-5xl font-bold mb-10 text-foreground">Partnerships & Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
                <div className="p-8 bg-card rounded-2xl shadow-lg border border-border">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Past Collaborations</h3>
                    <ul className="space-y-4 text-card-foreground">
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold">GN</span>
                            </div>
                            <div>
                                <p className="font-medium">GoNeutral</p>
                                <p className="text-sm text-muted-foreground">MVP and Product for Climosphere</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold">WO</span>
                            </div>
                            <div>
                                <p className="font-medium">World One Forex</p>
                                <p className="text-sm text-muted-foreground">Under Fragment - Website Service and Automations</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold">GR</span>
                            </div>
                            <div>
                                <p className="font-medium">Gamma Rotars</p>
                                <p className="text-sm text-muted-foreground">Under Fragment - Drone Video Streaming Prototype</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="p-8 bg-card rounded-2xl shadow-lg border border-border flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Let's Collaborate</h3>
                    <p className="text-muted-foreground mb-6">
                        Open to partnerships, freelance projects, and co-founder opportunities.
                    </p>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
}
