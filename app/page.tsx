import Image from 'next/image'
import nyanpasu from "@/public/icons/nyanpasu.webp"
export default async function Home() {

  return (
    <div>
      <main>
        <article className='w-[45%] mx-auto relative'>
          <Image className='m-auto' src={nyanpasu} alt='nyanpasu' width={300} height={500}/>
          <h1 className='text-[#EEEEEE] text-center text-2xl mt-3'>Let's start searching something...</h1>
        </article>
      </main>
    </div>
  )
}
