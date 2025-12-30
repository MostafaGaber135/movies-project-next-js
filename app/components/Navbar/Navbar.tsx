"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [value, setValue] = useState("");

    const handleSearch = (word: string) => {
        setValue(word);

        if (word.trim() === "") {
            router.push("/");
        } else {
            router.push(`/?query=${word}`);
        }
    };

    return (
        <nav className="bg-[#b45b35] h-[70px] w-full flex items-center justify-between px-6">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={64} height={64} />
            </Link>

            <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-4xl">
                    <input
                        value={value}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="بحث"
                        className="w-full h-14 rounded-full bg-white pr-12 pl-12 border-4 border-red-600 text-right"
                    />

                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600">
                        <Search />
                    </span>
                </div>
            </div>
        </nav>
    );
}
