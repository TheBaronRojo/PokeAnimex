import Image from "next/image"
import { scoreAverage } from "@/data/Search"
import Link from "next/link"
import Star from "@/public/icons/star.svg"
import Search from "@/public/icons/search.svg"
import { animeProps } from "@/utils/types"

export default function SearchBar({ data, visible }: animeProps) {

    const Legend = scoreAverage(data.score)

    return (
        <div className={`p-5 cursor-default w-3/5 md:w-4/5 min-h-full ${visible ? "opacity-1" : "fixed -left-full opacity-0"} transition-all duration-500`}>
            <div className="relative">
                <div className="">
                    <div>
                        <a>
                            <Image
                                className="rounded-lg w-full"
                                src={data.images.webp.image_url}
                                alt={data.title}
                                width={150}
                                height={300}
                            />
                        </a>
                    </div>
                    <div className="py-2 leading-5">
                        <h4 className="line-clamp-3 lg:line-clamp-none text-primary-white">{data.title}</h4>
                        <div className="py-1">
                            <label className="text-gray-400 text-sm">{Legend}</label>
                        </div>
                    </div>
                </div>
                <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-gray-600 w-full h-full transition-opacity">
                    <div className="relative">
                        <Image
                            className="rounded-lg w-full opacity-20"
                            src={data.images.webp.image_url}
                            alt={data.title}
                            width={150}
                            height={300}
                        />
                        <div className="absolute top-3 w-full">
                            <h3 className="line-clamp-3 text-base text-center w-full text-white font-semibold px-2">{data.title}</h3>
                            <div className="flex justify-center">
                                <Image alt="star" src={Star} width={16} height={16} />
                                <h4 className="pl-1 text-base text-center text-white">
                                    Score {data.score || "--"}
                                </h4>
                            </div>
                            <h4 className="line-clamp-5 md:line-clamp-3 pt-3 text-sm text-center w-full text-gray-300 italic px-2">{data.synopsis}</h4>
                            <Link href={data.url} target="_blank">
                                <button className={`flex mx-auto my-5 bg-secondary-black text-white text-sm font-bold py-2 px-4 rounded`}>
                                    <Image className="mr-2" src={Search} alt="More info" width={16} height={16} />
                                    More info
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}