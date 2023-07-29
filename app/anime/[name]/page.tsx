import SearchBar from '@/components/SearchBar'
import Slider from '@/components/Slider'
import { titleType } from "@/utils/types"
import { searchTitle } from '@/data/Search'

export default async function Home({ params: { name } }: titleType) {

    const { result } = await searchTitle(name || "")

    return (
        <div>
            <main>
                {
                    !result || !result.data?.length ?
                        <h1>Es hora de buscar, escribe un título</h1>
                        :
                        result && result.data.length > 0 ?
                            <Slider data={result.data} />
                            :
                            result && result.data.length === 0 &&
                            <h1>No se encontraron resultados</h1>
                }
            </main>
        </div>
    )
}

