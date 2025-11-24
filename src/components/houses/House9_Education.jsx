import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const mathSymbols = [
    "∫", "∑", "π", "∞", "√", "Δ", "θ", "λ", "β", "α",
    "sin", "cos", "log", "dy/dx", "f(x)", "lim", "∂",
    "Ω", "μ", "σ", "ε", "∇", "≈", "≠", "≤", "≥", "±",
    "∈", "∀", "∃", "∅", "⊂", "⊃", "∪", "∩", "tan", "cot"
];

const FloatingSymbol = ({ id, symbol, x, y }) => {
    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute text-white/50 font-serif font-bold pointer-events-none select-none z-0"
            style={{
                left: x,
                top: y,
                fontSize: Math.random() * 30 + 20 + "px"
            }}
        >
            {symbol}
        </motion.div>
    );
};

const MathBackground = () => {
    const [activeSymbols, setActiveSymbols] = useState([]);

    useEffect(() => {
        const generateSymbols = () => {
            const newSymbols = [];
            for (let i = 0; i < 8; i++) {
                newSymbols.push({
                    id: Date.now() + i,
                    symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
                    x: Math.floor(Math.random() * 90) + "%",
                    y: Math.floor(Math.random() * 90) + "%",
                });
            }
            setActiveSymbols(newSymbols);
        };

        generateSymbols(); // Initial call
        const interval = setInterval(generateSymbols, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
                {activeSymbols.map((s) => (
                    <FloatingSymbol
                        key={s.id}
                        id={s.id}
                        symbol={s.symbol}
                        x={s.x}
                        y={s.y}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

const EducationItem = ({ title, date, institution, score, delay }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="mb-10 ml-6 relative perspective-1000 z-10"
        >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3.5 ring-8 ring-background z-10"></span>

            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card hover:border-primary/50 transition-colors duration-300 cursor-default relative backdrop-blur-sm"
            >
                <div style={{ transform: "translateZ(50px)" }}>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">{title}</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{date}</time>
                    <p className="text-base font-normal text-muted-foreground">
                        {institution}
                    </p>
                    {score && (
                        <p className="text-sm font-medium text-primary mt-1">
                            Score: {score}
                        </p>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function House9_Education() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-10 mt-20 relative overflow-hidden">
            <MathBackground />
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-10 text-foreground z-10 relative"
            >
                Education & Wisdom
            </motion.h2>
            <div className="relative border-l-4 border-border ml-4 space-y-10 z-10">
                <EducationItem
                    title="Bachelor of Technology - ECE"
                    date="2020 - 2024"
                    institution="Indian Institute of Technology, Roorkee"
                    delay={0.2}
                />
                <EducationItem
                    title="Intermediate (Class XII)"
                    date="2020"
                    institution="DPS Nerul, Navi Mumbai"
                    score="87.80 %"
                    delay={0.4}
                />
                <EducationItem
                    title="Matriculate (Class X)"
                    date="2018"
                    institution="DPS, Nerul, Navi Mumbai"
                    score="87.00 %"
                    delay={0.6}
                />
            </div>
        </div>
    );
}
