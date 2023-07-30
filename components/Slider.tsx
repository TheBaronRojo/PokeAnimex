'use client'
import { useState } from "react";
import Image from 'next/image'
import chevron from "@/public/icons/chevron.svg"
import Card from '@/components/Card'
import { animeArrayProps, dataProps } from "@/utils/types";

export default function Slider({ data }: animeArrayProps) {

    const [index, setIndex] = useState(0)
    const [imagesToShow, setImagesToShow] = useState([0, 1, 2, 3, 4])

    function changeIndex(condition: string) {
        if (condition === "L") {
            if (index > 0) {
                setIndex(index - 1)
                setImagesToShow([index - 1, index, index + 1, index + 2, index + 3])
            }
        }
        else {
            if (index + 6 > data.length) {
                setIndex(0)
                setImagesToShow([0, 1, 2, 3, 4])
            }
            else {
                setIndex(index + 1)
                setImagesToShow([index + 1, index + 2, index + 3, index + 4, index + 5])
            }
        }
    }
    

    return (
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto my-10 min-h-4/5">
            <button className='px-4 mx-auto md:mx-0' onClick={() => changeIndex("L")} disabled={index === 0}>
                <Image
                    className={`${index === 0 ? "hidden" : ""} rotate-90 md:rotate-0`}
                    src={chevron}
                    alt="Chevron"
                    width={16}
                    height={16}
                />
            </button>
            <section className='flex-1'>
                <div className="flex flex-col items-center md:items-start md:flex-row justify-center object-cover ">
                    {
                        data.map((marker: any, i: number) => {
                            return (
                                <Card key={i} data={marker} visible={imagesToShow.includes(i)} />
                            );
                        })
                    }
                </div>
            </section>
            <button className='px-4 mx-auto md:mx-0' onClick={() => changeIndex("R")} disabled={index + 6 > data.length}>
                <Image
                    className={`-rotate-90 md:rotate-180 ${index + 6 > data.length ? "hidden" : ""}`}
                    src={chevron}
                    alt="Chevron"
                    width={16}
                    height={16}
                />
            </button>
        </div>
    )
}