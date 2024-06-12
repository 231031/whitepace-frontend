import logo from '../assets/logoIcon.svg';
import vector from '../assets/vector.svg';
import humMenu from '../assets/humMenu.svg';
import { useState } from 'react';

interface SendDataProps {
    sendDataToParent: any; // Replace with your specific data types
}

export default function Header({ sendDataToParent }: SendDataProps) {

    const [isNavOpen, setNavOpen] = useState(false);
    const toggleNavOpen = () => {
        setNavOpen(!isNavOpen);
        sendDataToParent(isNavOpen);
    }
    return (
        <div className='top-0 fixed w-full z-50'>
            <div className="bg-brightblue p-5">
                <div className="flex lg:flex-row flex-col items-center justify-between">
                    <div id='left-header' className='flex flex-row items-center lg:mb-0 justify-between w-full lg:w-auto'>
                        <div className='flex flex-row'>
                            <img src={logo} className='mr-2'></img>
                            <h3 className='text-white font-bold'>whitepace</h3>
                        </div>
                        <div
                            onClick={() => toggleNavOpen()}
                            className='block lg:hidden'>
                            <img src={humMenu}></img>
                        </div>
                    </div>

                    <div className={`
                    ${isNavOpen ? "block" : "hidden lg:block"}
                `}>
                        <div id='right-header'
                            className='flex lg:flex-row flex-col items-center'>
                            <div id='information'>
                                <ul className='text-white flex lg:flex-row flex-col lg:[&_li]:mx-4 [&_li]:mb-5 lg:[&_li]:mb-0'>
                                    <li><a>Products</a></li>
                                    <li><a>Solutions</a></li>
                                    <li><a>Resources</a></li>
                                    <li><a>Pricing</a></li>
                                </ul>
                            </div>
                            <div id='btn' className='flex flex-row'>
                                <button type="button" className='bg-tinyyellow rounded-sm px-5 py-3 text-sm text-brightblue'>Login</button>
                                <button className='flex flex-row items-center text-white bg-tinyblue px-3 py-3 rounded-sm text-sm ml-3'>
                                    Try Whitepace free <img src={vector} className='ml-1'></img>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
