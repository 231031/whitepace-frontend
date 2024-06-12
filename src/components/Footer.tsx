import vector from '../assets/vector.svg';
import appleLogo from '../assets/appleLogo.svg';
import windowLogo from '../assets/windowLogo.svg';
import androidLogo from '../assets/androidLogo.svg';
import logo from '../assets/logoIcon.svg';
import worldIcon from '../assets/worldIcon.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkIn from '../assets/linkIn.svg';

const content_footer = [
    {
        id: 0,
        head: 'Product',
        list: [
            {
                text: 'Overview'
            },
            {
                text: 'Pricing'
            },
            {
                text: 'Customer stories'
            },
        ]
    },
    {
        id: 1,
        head: 'Resources',
        list: [
            {
                text: 'Blog'
            },
            {
                text: 'Guides & tutorials'
            },
            {
                text: 'Help center'
            },
        ]
    },
    {
        id: 2,
        head: 'Company',
        list: [
            {
                text: 'About us'
            },
            {
                text: 'Careers'
            },
            {
                text: 'Media kit'
            },
        ]
    },
]
export default function Footer() {
    return (
        <div className="bg-brightblue text-white px-3 lg:px-10 pt-16">
            <div className="flex flex-col lg:items-center">
                <div id='top-footer'>
                    <div className='flex flex-col lg:items-center'>
                        <h2 className="text-3xl xs:text-6xl font-bold mb-12">Try Whitepace today</h2>
                        <p>
                            Get started for free.
                            Add your whole team as your needs grow.
                        </p>
                        <button
                            className='flex flex-row justify-center items-center 
                            text-white bg-tinyblue px-2 py-4 rounded-sm text-xs 
                            xs:w-1/3 w-1/2 my-8'>
                            Try Taskey free  <img src={vector} className='ml-1'></img>
                        </button>
                        <p>On a big team? Contact sales</p>
                    </div>
                    <div className='flex flex-row lg:justify-center my-8 xs:[&_img]:w-auto [&_img]:w-12'>
                        <img src={appleLogo}></img>
                        <img src={windowLogo} className='mx-5'></img>
                        <img src={androidLogo}></img>
                    </div>
                </div>

                <div id='mid-footer'
                    className='grid lg:grid-cols-5 grid-cols-1 place-items-center xs:place-items-start lg:mt-24'>
                    <div className='mb-10 lg:mb-0 lg:mr-0 xs:mr-48 mt-24 lg:mt-0 lg:w-4/5'>
                        <div className='flex flex-row justify-center xs:justify-start mb-3'>
                            <img src={logo} className='mr-2'></img>
                            <h3 className='text-white font-bold'>whitepace</h3>
                        </div>
                        <p className='text-center xs:text-start'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    {
                        content_footer.map((item) => (
                            <div key={item.id} className='mb-10 lg:mb-0 text-center xs:text-start'>
                                <h4 className='mb-3 font-semibold'>{item.head}</h4>
                                <ul>
                                    {
                                        item.list.map(listItem => (
                                            <li><a>{listItem.text}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div className='flex flex-col items-center xs:items-start w-[220px] lg:w-auto'>
                        <h2 className="text-xl xs:text-2xl font-bold mb-3">Try It Today</h2>
                        <p className='text-center xs:text-start'>
                            Get started for free.
                            Add your whole team as your needs grow.
                        </p>
                        <button
                            className='flex flex-row justify-center items-center 
                            text-white bg-tinyblue px-6 sm:px-2 py-4 rounded-sm text-xs 
                            my-3'>
                            Start today <img src={vector} className='ml-2'></img>
                        </button>
                    </div>


                </div>

                <span className='w-full bg-white h-[1px] mt-10 mb-10 hidden lg:block'></span>

                <div id='down-footer' className='w-full flex flex-col items-center lg:flex-row mb-10 mt-10 lg:mt-0'>
                    <div id='copy-right' className='flex flex-col items-center sm:flex-row w-full'>
                        <div className='flex flex-row mb-5 sm:mb-0 lg:mr-16 md:mr-16 sm:mr-10'>
                            <img src={worldIcon}></img>
                            <select className='bg-brightblue'>
                                <option>English</option>
                                <option>Thai</option>
                            </select>
                        </div>
                        <ul className='flex flex-col text-center sm:flex-row w-full lg:w-auto lg:[&_li]:mr-16 justify-between'>
                            <li className='mb-5 sm:mb-0'><a>Terms & privacy</a></li>
                            <li className='mb-5 sm:mb-0'><a>Security</a></li>
                            <li className='mb-5 sm:mb-0'><a>Status</a></li>
                            <li><a>©2021 Whitepace LLC.</a></li>
                        </ul>
                    </div>

                    <span className='w-full bg-white h-[1px] my-8 block lg:hidden'></span>

                    <ul className='flex flex-row'>
                        <li><a><img src={facebook}></img></a></li>
                        <li><a><img src={twitter} className='mx-8'></img></a></li>
                        <li><a><img src={linkIn}></img></a></li>
                    </ul>
                </div>
            </div>
            <div></div>

        </div>
    )
}
