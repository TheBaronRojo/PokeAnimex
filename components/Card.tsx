import Image from "next/image"
import { scoreAverage } from "@/data/Search"
import Link from "next/link"

export default function SearchBar({ data, visible }: any) {

    const Legend = scoreAverage(data.score)

    return (
        <article className={`p-5 cursor-default md:cursor-pointer w-4/5 min-h-full ${visible ? "opacity-1" : "fixed -left-full opacity-0"} transition-all duration-500`}>
            <div className="relative">
                <div>
                    <Link href={data.url} target="_blank">
                        <Image
                            className="cursor-pointer m-0 object-cover opacity-50 rounded-lg mx-auto"
                            src={data.images.webp.image_url}
                            alt={data.title}
                            width={150}
                            height={300}
                        />
                    </Link>
                </div>
                <h2 className="cursor-pointer line-clamp-3 font-bold max-w-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg">
                    {data.title}
                </h2>
            </div>
            <p className="text-white text-center py-1">{Legend}</p>
        </article>
    )
}