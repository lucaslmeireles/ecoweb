


export const GridCard = (data: GridCardProps) => {

    return (
        <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
        <img src={'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'} className='h-full w-full object-cover'/>
        <div className=' flex justify-between align-middle items-center bottom-0 bg-slate-100  rounded-b-md w-56 h-16 absolute'>
            <div className=' flex flex-col'>
            <p className='font-semibold ml-2 mt-1 '>
            Teste
            </p>
            <small className='font-light text-xs ml-2 '>
            Category
            </small>
            </div>
            <div className='h-10 w-10 mr-2 hover:border rounded-full border-slate-300 shadow-inner flex items-center justify-center'>
            <img src='https://cdn.icon-icons.com/icons2/933/PNG/512/keyboard-right-arrow-button-1_icon-icons.com_72690.png' className='h-6 w-6'/>
            </div>
        </div>
        </div>
    )
}
