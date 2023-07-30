import Slider from '@/components/Slider'
import { titleType } from "@/utils/types"
import { searchTitle } from '@/data/Search'
import { Metadata } from 'next'

/**
 * This page is dynamic, it receives the title as a parameter
 * and searches for it. The search is made in the server side
 * so it's impossible for the client see the conections (You can see it 
 * in the inspector of the browser), it works as backend, however next has
 * it's own internal API.
 */
export default async function Home({ params: { name } }: titleType) {

    const { result, error } = await searchTitle(name || "")

    /**
     * This is not rendered until the await is finished,
     * meanwhile the page is loading
     */
    return (
        <div>
            <main>
                {
                    error
                        ?
                        <div className="flex flex-col w-full h-full justify-center items-center text-primary-white text-5xl">
                            <h1>An error has occurred</h1>
                        </div>
                        :
                        !result && !result.data?.length ?
                            <div className="flex flex-col w-full h-full justify-center items-center text-primary-white text-5xl">
                                <h1>Time to search, type a title</h1>
                            </div>
                            :
                            result && result.data.length > 0 ?
                                <Slider data={result.data} />
                                :
                                result && result.data.length === 0 &&
                                <div className="flex flex-col w-full h-full justify-center items-center text-primary-white text-5xl">
                                    <h1>No results found</h1>
                                </div>
                }
            </main>
        </div>
    )
}

/**
 * Dynamic metadata. Loads the searched title
 */
export async function generateMetadata(
    { params }: titleType,
): Promise<Metadata> {
    return {
        title: `${params.name} | PokeAnimex`
    }
}