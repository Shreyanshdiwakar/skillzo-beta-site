import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
    const stats = [
        { value: "19,500+", label: "Students" },
        { value: "1,500+", label: "Mentors" },
        { value: "75+", label: "Cities" },
    ];
    return (
        <section className="flex flex-col items-center justify-center text-center px-4  relative overflow-hidden">
            <div className="min-h-dvh">
            {/* Main Text */}
            <div className="">
                <h2 className="text-base md:text-lg font-bold text-primary mb-1">
                    Join India&apos;s
                </h2>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide ">
                    #1 Teenpreneur
                    <br />
                    Community
                </h1>
                <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl mx-auto">
                    Skillzo is a community of high school students where we empower future teen
                    leaders with exposure, experience, and networking opportunities to unlock
                    their full potential.
                </p>
                <Link
                    href="#join"
                    className="bg-primary text-black px-10 py-3 rounded-full font-bold text-xl shadow hover:bg-yellow-500 transition"
                >
                    Join our community for FREE!
                </Link>
            </div>


            {/* Stats Strip */}
            <div className="w-full flex justify-center py-2 mt-12">
                <div className="flex flex-row items-center gap-3 bg-neutral-900/80 border border-yellow-400 rounded-full px-6 py-4 md:px-8 md:py-3 shadow-lg text-lg md:text-xl font-semibold text-yellow-400 backdrop-blur-md max-w-full">
                    {stats.map((stat, idx) => (
                        <React.Fragment key={stat.label}>
                            <span className="text-sm md:text-2xl font-extrabold text-white">{stat.value}</span>
                            <span className="text-sm md:tet-base text-yellow-400">{stat.label}</span>
                            {idx < stats.length - 1 && <span className="mx-1 text-yellow-400">•</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            </div>


            {/* Images */}
            <div className="w-full max-w-5xl flex justify-center items-center gap-1 py-8 px-4">
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 1" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 2" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 3" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 4" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 5" className="w-full rounded shadow-md" />
            </div>

        </section>

    )
}


