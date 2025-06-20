import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4  relative overflow-hidden">
            <div className="py-12">
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
            <div className="w-full flex justify-center items-center gap-1 py-8 px-4">
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 1" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 2" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 3" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 4" className="w-full rounded shadow-md" />
                <Image width={120} height={60} src="https://v0.dev/placeholder.svg?width=120&height=60" alt="Placeholder 5" className="w-full rounded shadow-md" />
            </div>

        </section>

    )
}