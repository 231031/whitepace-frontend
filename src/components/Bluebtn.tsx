import vector from '../assets/vector.svg';

export default function Bluebtn() {
    return (
        <button className='flex flex-row items-center text-white bg-tinyblue px-2 py-2 rounded-sm text-sm ml-3'>
            Try Whitepace free <img src={vector} className='ml-1'></img>
        </button>
    )
}
