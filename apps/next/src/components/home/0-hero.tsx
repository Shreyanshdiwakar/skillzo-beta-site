import Link from "next/link";
import React from "react";
import StatsStrip from "../stats-strip";

export default function Hero() {
    const stats = [
        { value: "19,500+", label: "Students" },
        { value: "1,500+", label: "Mentors" },
        { value: "75+", label: "Cities" },
        { value: "10+", label: "Programs" }
    ] 
    return (
        <section className="flex flex-col items-center justify-center text-center px-4  relative overflow-hidden">
            <div className="py-10 md:py-0">
                {/* Main Text */}
                <div className="md:py-2 lg:py-4">
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
                        href="/joincommunity"
                        className="bg-primary text-black px-10 py-3 rounded-full font-bold sm:text-xl shadow hover:bg-yellow-500 transition"
                    >
                        Join our community for FREE!
                    </Link>
                </div>


                <StatsStrip stats={stats} />
                </div>

            {/* Images */}
            {/* <div className="w-full max-w-5xl flex justify-center items-center gap-1 px-4">
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 1" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 2" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 3" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 4" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 5" className="w-full rounded shadow-md" />
            </div> */}
        </section>

    )
}


