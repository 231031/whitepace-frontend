import vector from '../assets/vector.svg';
import dataImg from '../assets/dataImg.svg';

interface dataProps {
    dataFromParent: any
}

export default function Contentlanding({ dataFromParent }: dataProps) {

    const img1 = 'https://i0.wp.com/goldrabbit.co.uk/wp-content/uploads/2022/07/White-Spaces-in-Graphic-Design.jpg?w=1800&ssl=1';
    // two parameters for select seq in lg and other -> lg: 1 -> image come first and other: 1 -> image up messages
    return (
        <div
            className={`
                grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start px-3 lg:px-8 py-16
                ${dataFromParent[3] === 'brightblue' ? "bg-brightblue text-white" : ""}
            `}>
            <div
                className={`
                flex flex-col items-center lg:items-start my-auto
                ${dataFromParent[5] === 'change' ? 'order-2 lg:order-1 mt-16 lg:my-auto' : ''}
            `}>
                <h2 className="text-3xl xs:text-6xl font-bold mb-12">{dataFromParent[0]}</h2>
                <p className="text-xs mb-12">
                    {dataFromParent[1]}
                </p>
                <button
                    className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                    {dataFromParent[2]}  <img src={vector} className='ml-1'></img>
                </button>
            </div>
            <div
                className={`
                mt-24 w-auto lg:px-0 md:px-24 px-2 lg:my-auto lg:mx-auto lg:ml-8
                ${dataFromParent[5] === 'change' ? 'order-1 lg:order-2 mt-0' : ''}
            `}>
                <img className='lg:w-[650px] lg:h-[450px]'
                    src={dataFromParent[4] === 'dataImg' ? dataImg : img1}></img>
            </div>
        </div>
    )
}
