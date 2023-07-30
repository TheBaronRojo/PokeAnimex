import Image from "next/image"
import Spin from "@/public/icons/spin.svg"

/**
 * When the page is loading this screen is rendered
 */
export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center text-primary-white text-5xl">
            <Image
                className="animate-spin m-3"
                src={Spin}
                alt="Loading results"
                width={100}
                height={100}
            />
            <h1>Loading</h1>
        </div>
    )
}