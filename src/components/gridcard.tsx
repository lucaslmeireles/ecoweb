export type GridCardProps = {
        title: string;
        category: string;
        image: string;
        id:number
}


export const GridCard = (data: GridCardProps) => {
    const {title, category, image} = data
    return (
        <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
            <img src={image} className='h-full w-full object-cover'/>
            <div className=' flex justify-between align-middle items-center bottom-0 bg-slate-100  rounded-b-md w-full h-16 absolute'>
                <div className=' flex flex-col'>
                    <p className='font-semibold ml-2 mt-1 '>
                    {title}
                    </p>
                    <small className='font-light text-xs ml-2 '>
                    {category}
                    </small>
                </div>
                <div className='h-10 w-10 mr-2 hover:border rounded-full border-slate-300 shadow-inner flex items-center justify-center'>
                    <img src='https://cdn.icon-icons.com/icons2/933/PNG/512/keyboard-right-arrow-button-1_icon-icons.com_72690.png' className='h-6 w-6'/>
                </div>
        </div>
        </div>
    )
}
