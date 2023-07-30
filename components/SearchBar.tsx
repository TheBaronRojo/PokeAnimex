'use client'
import { FormEvent, useState, useRef } from "react";
import Search from "@/public/icons/search.svg"
import Spin from "@/public/icons/spin.svg"
import Image from "next/image"
import { preSearchType } from "@/utils/types";
import { useRouter, useParams } from 'next/navigation'

export default function SearchBar() {

    const params = useParams();
    const router = useRouter()
    const btnRef = useRef<HTMLButtonElement>(null)
    const [titleSearch, setTitleSearch] = useState(params.name || "")
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true)
        router.push(`/anime/${titleSearch}`)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }

    return (
        <div className="w-[45%] mx-auto relative">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input disabled={isLoading} autoFocus value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)}
                    className="text-white bg-secondary-black w-full pr-10 border-2 border-secondary-black py-3 px-5 rounded-full"
                    type="text" placeholder="Buscar título..." />
                <button ref={btnRef} type="submit" className={`absolute top-5 right-4 ${isLoading ? "animate-spin" : ""}`}>
                    <Image src={isLoading ? Spin : Search} alt="Buscar" width={16} height={16} />
                </button>
            </form>
        </div>
    )
}