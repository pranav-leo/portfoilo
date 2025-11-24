import { ExpMarquee } from "@/components/experince";

export default function House3_Experience() {
    // Conference data
    const conferences = [
        {
            name: "TEDx IIT Roorkee",
            location: "IIT Roorkee",
            date: "2024",
            role: "Advisory Council",
            topic: "Leadership & Event Management"
        },
        {
            name: "E-Summit IIT Roorkee",
            location: "IIT Roorkee",
            date: "2023",
            role: "Head of Tech",
            topic: "Organizing Committee"
        },
        {
            name: "Inter IIT Sports Meet",
            location: "IIT Roorkee/Delhi",
            date: "2022",
            role: "Dev Head",
            topic: "Sports Tech Implementation"
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-background">
            <h2 className="text-5xl font-bold mb-10 text-foreground">Experience & Communication</h2>


            {/* Conference Section */}
            <div className="w-full max-w-6xl px-4">
                <h3 className="text-4xl font-bold mb-8 text-center text-foreground">Conferences & Speaking</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {conferences.map((conference, index) => (
                        <div
                            key={index}
                            className="p-6 border border-border rounded-xl bg-card hover:bg-card/80 transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="text-2xl font-semibold text-foreground">{conference.name}</h4>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                                    {conference.role}
                                </span>
                            </div>
                            <p className="text-lg text-muted-foreground mb-2">{conference.topic}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {conference.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {conference.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
