import { GridCard } from '@/components/gridcard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid-cols-4 grid col-span-4 gap-8'>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
      <img className='h-full w-full object-cover' src={'https://images.unsplash.com/photo-1682687219612-b12805df750d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} />
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg '>
        <img   className='h-full object-cover'  src={'https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&'}/>
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
      <img  className='h-full w-full object-cover' src={'https://images.unsplash.com/photo-1687170570291-25fa0b2ac336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&'}/>
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
      <img   className='h-full w-full object-cover' src={'https://images.unsplash.com/photo-1687270282079-58b4689fed0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&'}/>
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
      <img src={'https://images.unsplash.com/photo-1685171755238-0b1c05b0fd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'} className='h-full w-full object-cover'/>
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>
      <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
      <img src={'https://images.unsplash.com/photo-1683009426501-028aabdd7b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} className='h-full w-full object-cover'/>
        <div className=' flex flex-col bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
        <p className='font-semibold ml-2 mt-3 '>
          Teste
        </p>
        <small className='font-light text-xs ml-2 '>
          Category
        </small>
        </div>
      </div>

    </div>
    </main>
  )
}
