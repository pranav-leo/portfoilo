import { useState } from "react";

export default function House10_Career() {
    const [activeTab, setActiveTab] = useState("experience");

    const experience = [
        {
            company: "Palmonas",
            role: "Software Engineer Founders Office",
            period: "AUG 2025 - Present",
            achievements: [
                "Led a team to create an autonomous Return Management System saving 40% bandwidth of customer support team",
                "Leveraged AI and ML to streamline order processing, quality checks, and automate exchange and refund workflows",
                "Managed and Deployed multiple Data and ML Dashboards for internal Analytics using PostgreSQL and Django"
            ]
        },
        {
            company: "Astro Arun Pandit",
            role: "Software Engineer",
            period: "OCT 2024 - AUG 2025",
            achievements: [
                "Streamlined e-report delivery workflow using Django, Redis, and Zoho integration, generating revenue worth 40 lakhs",
                "Led and Developed top selling Reports, with state-of-the-art Algorithms in Django, with 20L revenue in a week",
                "Managed and Deployed multiple Data and ML pipelines for in-house analytical tools and Dashboards",
                "Fixed and Upgraded Zoho Modules and its pipelines, mitigating the Negative impact for Lakhs of customers",
                "Detected and Evaded Data Breaches, prevented Source Code Leaks, and identified Internal Moles, safeguarding critical assets and ensuring Zero Downtime for customers"
            ]
        },
        {
            company: "India Accelerator",
            role: "Freelancer",
            period: "Jun 2024 - Sep 2024",
            achievements: [
                "Enhanced the backend to enable third-party to seamlessly manage bookings for coworking area using Strapi",
                "Developed backend to efficiently track startups, manage their portfolio using Bun.js and Drizzle and Supabase",
                "Deployed multiple applications, built with Metabase, Strapi, Node.js, and Django, on AWS cloud infrastructure"
            ]
        },
        {
            company: "ITS TIME (Pre Incubated in TIDES)",
            role: "Co-Founder",
            period: "Dec 2022 - May 2024",
            achievements: [
                "Developed state-of-the-art tech to reduce time mismanagement for high school students aspiring for JEE",
                "Designed and built 0 to 1 features like calendar, task management, and gamification to enhance user engagement",
                "Led a team to build the platform in Django and Next, with 50+ active users in a week in D2C and 3 B2B leads",
                "Designed an AI algorithm based on Elo rating to predict the next best question for personalized learning paths"
            ]
        }
    ];

    const projects = [
        {
            name: "Trumio Ecosystem Challenge",
            event: "Inter IIT Tech Meet 12",
            period: "Oct 2023 - Dec 2023",
            achievements: [
                "Led a team of Developers, Designers, and PMs to enhance user experience on Trumio's ecosystem by integrating AI",
                "Developed an AI Interviewer bot powered by GPT-4 along with video and audio analysis, hosted on Django",
                "Created the frontend in Next.js along with an AI backed task evaluator using Flask, hosted on EC2 with RDS and S3"
            ]
        },
        {
            name: "AI Security",
            event: "Inter IIT Tech Meet 11",
            period: "Dec 2022 - Feb 2023",
            achievements: [
                "Developed an algorithm to detect data poisoning attacks and to identify and remove infected data in CNN Models",
                "Conducted in-depth market research and curated PRDs and a pitch deck for ML security-based products",
                "Devised strategies to prevent different attacks on various types of models while minimizing loss in accuracy"
            ]
        },
        {
            name: "Traffic Violation Detection System",
            event: "Inter IIT Tech Meet 10",
            period: "Jan 2022 - Mar 2022",
            achievements: [
                "Trained a Deep Learning model based on the Yolo algorithm to detect traffic offenders with an efficiency of 80%",
                "Increased data set by 25x using OpenCV and image augmentation techniques such as flipping and blurring",
                "Developed Web interface using Django for hosting the model and storing evidence and number plate of the offenders"
            ]
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-20 bg-background">
            <h2 className="text-5xl font-bold mb-10 text-foreground">Career & Major Projects</h2>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-12 border-b border-border">
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`px-6 py-3 text-lg font-medium transition-colors ${
                        activeTab === "experience"
                            ? "text-foreground border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    Experience
                </button>
                <button
                    onClick={() => setActiveTab("projects")}
                    className={`px-6 py-3 text-lg font-medium transition-colors ${
                        activeTab === "projects"
                            ? "text-foreground border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    Projects
                </button>
            </div>

            {/* Content */}
            <div className="w-full max-w-5xl px-4">
                {activeTab === "experience" && (
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 border border-border rounded-xl bg-card hover:bg-card/80 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                                        <p className="text-lg text-primary font-medium">{exp.role}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                                </div>
                                <ul className="space-y-2 mt-4">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-primary mt-1.5">•</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "projects" && (
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 border border-border rounded-xl bg-card hover:bg-card/80 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{project.name}</h3>
                                        <p className="text-lg text-primary font-medium">{project.event}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{project.period}</span>
                                </div>
                                <ul className="space-y-2 mt-4">
                                    {project.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-primary mt-1.5">•</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
