import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-6">
            <Image src={"/skillzo_transparent.png"} width={352 / 2.5} height={87 / 2.5} alt="Skillzo Logo" />
            <a href="#apply"
                className="bg-primary text-black px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition">Join
                now</a>
        </nav>
    )
}