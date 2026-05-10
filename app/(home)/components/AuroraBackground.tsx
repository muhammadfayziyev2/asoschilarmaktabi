"use client";

export default function AuroraBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Aurora to'lqin 1 — ko'k */}
            <div
                className="absolute top-[20%] left-[-20%] w-[800px] h-[600px] rounded-full opacity-40"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "aurora-1 20s ease-in-out infinite",
                }}
            />

            {/* Aurora to'lqin 2 — binafsha */}
            <div
                className="absolute top-[10%] right-[-15%] w-[700px] h-[500px] rounded-full opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
                    filter: "blur(80px)",
                    animation: "aurora-2 25s ease-in-out infinite",
                }}
            />

            {/* Aurora to'lqin 3 — pushti */}
            <div
                className="absolute top-[40%] left-[30%] w-[600px] h-[400px] rounded-full opacity-25"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)",
                    filter: "blur(70px)",
                    animation: "aurora-3 30s ease-in-out infinite",
                }}
            />

            {/* Aurora to'lqin 4 — turkuaz */}
            <div
                className="absolute bottom-[20%] right-[10%] w-[750px] h-[500px] rounded-full opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0.1) 40%, transparent 70%)",
                    filter: "blur(80px)",
                    animation: "aurora-4 22s ease-in-out infinite",
                }}
            />
        </div>
    );
}