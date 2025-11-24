export default function House8_Transformation() {
    return (
        <div className="relative min-h-[400vh] w-full bg-background py-[20vh]">
            {/* Content Layer - Sticky */}
            <div className="sticky top-[20vh] h-screen flex flex-col items-center justify-center overflow-visible z-0">
                <div className="max-w-3xl text-center space-y-8 p-10 relative z-20">
                    <h2 className="text-5xl font-bold mb-10 text-foreground">Transformation & Resilience</h2>
                    <p className="text-xl text-muted-foreground">
                        "Success is not final, failure is not fatal: it is the courage to continue that counts."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
                        <div className="p-6 border border-border rounded-xl bg-card">
                            <h3 className="text-xl font-semibold mb-2 text-destructive">The Challenge</h3>
                            <p className="text-muted-foreground">
                                Faced a critical failure in a major project deployment that taught me the importance of robust testing and CI/CD pipelines.
                            </p>
                        </div>
                        <div className="p-6 border border-border rounded-xl bg-card">
                            <h3 className="text-xl font-semibold mb-2 text-primary">The Rebirth</h3>
                            <p className="text-muted-foreground">
                                Emerged with a deeper understanding of system reliability, leading to 99.9% uptime in subsequent projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
