import vector from '../assets/vector.svg';

interface dataProps {
    dataFromParent: any
}

export default function Contentlanding({ dataFromParent }: dataProps) {

    const img1 = 'https://i0.wp.com/goldrabbit.co.uk/wp-content/uploads/2022/07/White-Spaces-in-Graphic-Design.jpg?w=1800&ssl=1';
    // two parameters for select seq in lg and other -> lg: 1 -> image come first and other: 1 -> image up messages
    return (
        <div
            className={`
                 text-center lg:text-start 
                ${dataFromParent[3] === 'brightblue' ? "bg-brightblue text-white" : ""}
                ${dataFromParent[7] && dataFromParent[7] === 'bg-sec1' ? "bg-sec1 bg-no-repeat bg-left-top lg:bg-center " : ""}
            `}>
            <div className="container">
                <div className="content-section">
                    <div
                        className={`
                flex flex-col items-center lg:items-start my-auto
                ${dataFromParent[5] === '1' && dataFromParent[6] === '1' ? 'order-2 lg:order-2 mt-16 lg:my-auto lg:ml-10' : ''}
                ${dataFromParent[5] === '1' && dataFromParent[6] === '2' ? 'order-1 lg:order-2 lg:my-auto' : ''}
                ${dataFromParent[5] === '2' && dataFromParent[6] === '1' ? 'order-2 lg:order-1 mt-16 lg:my-auto lg:mr-10' : ''}
                ${dataFromParent[5] === '2' && dataFromParent[6] === '2' ? 'order-1 lg:order-1 lg:my-auto lg:mr-10' : ''}
            `}>
                        <div className="relative">
                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-5xl font-bold mb-12 underline-yellow" dangerouslySetInnerHTML={{ __html: dataFromParent[0] }} />
                            </div>
                        </div>
                        <p className="text-xs mb-12 break-words">
                            {dataFromParent[1]}
                        </p>
                        <button
                            className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs 
                    lg:w-1/2 w-4/5'>
                            {dataFromParent[2]}  <img src={vector} className='ml-1'></img>
                        </button>
                    </div>
                    <div
                        className={`
                w-auto lg:px-0 md:px-24 px-2 lg:my-auto lg:mx-auto 
                ${dataFromParent[5] === 'change' ? 'order-1 lg:order-2 mt-0' : ''}
                ${dataFromParent[5] === '1' && dataFromParent[6] === '1' ? 'order-1 lg:order-1 mt-0 lg:my-auto lg:mx-auto' : ''}
                ${dataFromParent[5] === '1' && dataFromParent[6] === '2' ? 'order-2 lg:order-1 lg:my-auto mx-auto mt-24' : ''}
                ${dataFromParent[5] === '2' && dataFromParent[6] === '1' ? 'order-1 lg:order-2 mt-0 lg:my-auto lg:mx-auto' : ''}
                ${dataFromParent[5] === '2' && dataFromParent[6] === '2' ? 'order-2 lg:order-2 lg:my-auto mt-24 lg:mx-auto' : ''}
            `}>
                        <img className='lg:w-[660px] lg:h-[420px]'
                            src={dataFromParent[4] || img1}></img>
                    </div>
                </div>

            </div>

        </div>
    )
}


{/* index 7 -> desktop, index 8 -> ipad, index 9 -> phone */ }
{/* {
                        dataFromParent[7] != '' ? (
                            <img src={dataFromParent[7]}
                                className={`
                                absolute w-auto right-0 top-1/5 lg:top-1/3
                                ${dataFromParent[8] != '' ? "hidden lg:block" : ""} 
                                ${dataFromParent[9] != '' ? "hidden lg:block" : ""}
                            `}></img>
                        ) : (
                            <img className='hidden'></img>
                        )
                    }
                    {
                        dataFromParent[8] != '' ? (
                            <img src={dataFromParent[8]}
                                className={`
                                absolute w-auto right-0 top-1/5 lg:top-1/3
                                ${dataFromParent[9] != '' ? "hidden md:block lg:hidden" : ""}
                            `}></img>
                        ) : (
                            <img className='hidden'></img>
                        )
                    }
                    {
                        dataFromParent[9] != '' ? (
                            <img src={dataFromParent[9]}
                                className={`
                                absolute w-auto right-0 top-1/5 lg:top-1/3 block md:hidden
                            `}></img>
                        ) : (
                            <img className='hidden'></img>
                        )
                    } */}
