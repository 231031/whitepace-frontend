import Header from "./Header";
import vector from '../assets/vector.svg';
import { useState } from "react";
import together from '../assets/togetherImg.svg';
import checkIcon from '../assets/checkIcon.svg';
import checkY from '../assets/checkY.svg';
import Contentlanding from "./Contentlanding";
import apple from '../assets/Apple.svg';
import microsoft1 from '../assets/microsoft 1.svg';
import slack from '../assets/Slack.svg';
import google from '../assets/Google.svg';
import apps from '../assets/Apps.svg';
import QuoteBlue from '../assets/QuoteBlue.svg';
import QuoteWhite from '../assets/QuoteWhite.svg';

import Footer from "./Footer";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Landing() {
    const [isNavOpen, setNav] = useState(true);
    function handleData(data: boolean) {
        setNav(data);
    }

    function handleClick(seq: number) {
        let freeOrder = 'order-1';
        let perOrder = 'order-2';
        let organOrder = 'order-3';

        const free = document.getElementById('plan-free');
        const per = document.getElementById('plan-personal');
        const organ = document.getElementById('plan-organization');

        free?.classList.remove('order-1', 'order-2', 'order-3', 'mx-10');
        per?.classList.remove('order-1', 'order-2', 'order-3', 'mx-10');
        organ?.classList.remove('order-1', 'order-2', 'order-3', 'mx-10');

        if (seq === 1) { // click free plan
            freeOrder = 'order-2';
            perOrder = 'order-1';
            organOrder = 'order-3';

            free?.classList.add(freeOrder);
            free?.classList.add('mx-10');

            per?.classList.add(perOrder);
            organ?.classList.add(organOrder);

        } else if (seq === 2) {
            freeOrder = 'order-1';
            perOrder = 'order-2';
            organOrder = 'order-3';

            per?.classList.add(perOrder);
            per?.classList.add('mx-10');

            free?.classList.add(freeOrder);
            organ?.classList.add(organOrder);
        } else {
            freeOrder = 'order-3';
            perOrder = 'order-1';
            organOrder = 'order-2';

            organ?.classList.add(organOrder);
            organ?.classList.add('mx-10');

            per?.classList.add(perOrder);
            free?.classList.add(freeOrder);
        }

    }

    function handleClickClient(seq: number) {
        let first = 'order-1';
        let second = 'order-2';
        let third = 'order-3';

        const firstE = document.getElementById('first-client');
        const secondE = document.getElementById('second-client');
        const thirdE = document.getElementById('third-client');

        firstE?.classList.remove('order-1', 'order-2', 'order-3', 'mx-5');
        secondE?.classList.remove('order-1', 'order-2', 'order-3', 'mx-5');
        thirdE?.classList.remove('order-1', 'order-2', 'order-3', 'mx-5');

        if (seq === 1) { // click firstE plan
            first = 'order-2';
            second = 'order-1';
            third = 'order-3';

            firstE?.classList.add(first);
            firstE?.classList.add('mx-5');

            secondE?.classList.add(second);
            thirdE?.classList.add(third);

        } else if (seq === 2) {
            first = 'order-1';
            second = 'order-2';
            third = 'order-3';

            secondE?.classList.add(second);
            secondE?.classList.add('mx-5');

            firstE?.classList.add(first);
            thirdE?.classList.add(third);
        } else {
            first = 'order-3';
            second = 'order-1';
            third = 'order-2';

            thirdE?.classList.add(third);
            thirdE?.classList.add('mx-5');

            secondE?.classList.add(second);
            firstE?.classList.add(first);
        }
    }

    return (
        <div>
            <Header sendDataToParent={handleData} />

            {/* section 1 */}
            <div id='section1'
                className={`
                grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start bg-brightblue text-white px-3 lg:px-8 py-16 w-full
                ${isNavOpen ? "lg:mt-20 mt-16" : "mt-72 lg:mt-0"}
            `}>
                <div className="flex flex-col items-center lg:items-start my-auto">
                    <h2 className="text-3xl xs:text-6xl font-bold mb-12">Get More Done with whitepace</h2>
                    <p className="text-xs mb-12">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <button
                        className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                        Try TasKey Free  <img src={vector} className='ml-1'></img>
                    </button>
                </div>
                <div className="ml-0 mt-24 w-auto lg:px-0 md:px-24 px-2 lg:my-auto lg:mx-auto lg:ml-8">
                    <img className='lg:w-[650px] lg:h-[450px]'
                        src='https://i0.wp.com/goldrabbit.co.uk/wp-content/uploads/2022/07/White-Spaces-in-Graphic-Design.jpg?w=1800&ssl=1'></img>
                </div>
            </div>

            {/* section 2 */}
            <Contentlanding
                dataFromParent={[
                    'Project Management',
                    'Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.',
                    'Get Started']} />

            {/* section 3 */}
            <div id='section3'
                className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start px-3 lg:px-8 pt-16 lg:pb-16 ">
                <div className="w-auto lg:my-auto mx-auto order-2 lg:order-1 lg:px-10 my-16 lg:mt-0">
                    <img className='lg:w-[650px] lg:h-[450px]'
                        src={together} ></img>
                </div>
                <div className="flex flex-col items-center lg:items-start my-auto order-1 lg:order-2">
                    <h2 className="text-3xl xs:text-6xl font-bold mb-12">Work together</h2>
                    <p className="text-xs mb-12">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button
                        className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                        Try it now  <img src={vector} className='ml-1'></img>
                    </button>
                </div>
            </div>

            {/* section 4 */}
            <Contentlanding
                dataFromParent={[
                    'Use as Extension',
                    'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.',
                    'Let’s Go',
                    'brightblue']} />

            {/* section 5 */}
            <div id='section5'
                className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start px-3 lg:px-8 py-16 ">
                <div className="w-auto lg:my-auto mx-auto lg:px-10 my-auto">
                    <img className='lg:w-[650px] lg:h-[450px]'
                        src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/how-to-create-wordpress-plugin.png'
                    ></img>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:my-auto mt-16">
                    <h2 className="text-3xl xs:text-6xl font-bold mb-12">
                        Customise it
                        to your needs
                    </h2>
                    <p className="text-xs mb-12">
                        Customise the app with plugins, custom themes and multiple text editors
                        (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API. others.
                    </p>
                    <button
                        className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                        Let’s Go  <img src={vector} className='ml-1'></img>
                    </button>
                </div>
            </div>

            {/* plan slide section */}
            <div id="plan-list" className="flex flex-col items-center px-3 lg:px-8 lg:py-10 py-16">
                <div id="plan-head" className="text-center">
                    <h3 className="font-bold text-3xl xs:text-6xl">Choose Your Plan</h3>
                    <p className="text-xs my-8">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                    </p>
                </div>

                <div id="plan-slide" className="flex justify-center items-center overflow-hidden w-full">

                    <div id="plan-free"
                        onClick={() => handleClick(1)}
                        className='flex flex-col justify-center border-2 border-tinyyellow rounded-md p-6 
                        sm:min-w-[400px] min-w-[280px] grow-0 sm:whitespace-nowrap
                        hover:shadow-2xl hover:min-h-[400px] max-h-[350px] sm:${freeOrder}'>
                        <h2 className="font-bold mb-5 text-xl">Free</h2>
                        <h2 className="font-bold mb-5 text-xl">$0</h2>
                        <p className="font-semibold mb-5">Capture ideas and find them quickly</p>
                        <div className="flex flex-col">
                            <div className="flex flex-row mb-5 text-xs">
                                <img src={checkIcon} className="w-5 h-5 mr-3"></img>
                                <p>Sync unlimited devices</p>
                            </div>
                            <div className="flex flex-row mb-5 text-xs">
                                <img src={checkIcon} className="w-5 h-5 mr-3"></img>
                                <p>
                                    Add due dates, reminders, and notifications to your tasks
                                </p>
                            </div>
                        </div>

                        <button className="border-2 border-tinyyellow px-2 py-3 text-xs sm:w-1/3 rounded-md font-semibold">Get Started</button>
                    </div>

                    <div id="plan-personal"
                        onClick={() => handleClick(2)}
                        className='flex flex-col justify-center bg-brightblue text-white rounded-md p-6 shadow-2xl 
                        sm:min-w-[400px] min-w-[280px]  grow-0 sm:whitespace-nowrap mx-10
                        hover:shadow-2xl hover:min-h-[400px] max-h-[350px] sm:$[perOrder]'>
                        <h2 className="font-bold mb-5 text-xl">Personal</h2>
                        <h2 className="font-bold mb-5 text-xl">$11.99</h2>
                        <p className="font-semibold mb-5">Capture ideas and find them quickly</p>
                        <div className="flex flex-row mb-5 text-xs">
                            <img src={checkY} className="w-5 h-5 mr-3"></img>
                            <p>Sync unlimited devices</p>
                        </div>
                        <div className="flex flex-row mb-5 text-xs">
                            <img src={checkY} className="w-5 h-5 mr-3"></img>
                            <p>
                                Add due dates, reminders, and notifications to your tasks
                            </p>
                        </div>
                        <button className="bg-tinyblue px-2 py-3 text-xs sm:w-1/3 rounded-md font-semibold">Get Started</button>
                    </div>

                    <div id="plan-organization"
                        onClick={() => handleClick(3)}
                        className='flex flex-col justify-center border-2 border-tinyyellow rounded-md p-6 
                        sm:min-w-[400px] min-w-[280px] grow-0 sm:whitespace-nowrap
                        hover:shadow-2xl hover:min-h-[400px] max-h-[350px] sm:$[organOrder]'>
                        <h2 className="font-bold mb-5 text-xl">Organization</h2>
                        <h2 className="font-bold mb-5 text-xl">$49.99</h2>
                        <p className="font-semibold mb-5">Capture ideas and find them quickly</p>
                        <div className="flex flex-row mb-5 text-xs">
                            <img src={checkIcon} className="w-5 h-5 mr-3"></img>
                            <p>Sync unlimited devices</p>
                        </div>
                        <div className="flex flex-row mb-5 text-xs">
                            <img src={checkIcon} className="w-5 h-5 mr-3"></img>
                            <p>
                                Add due dates, reminders, and notifications to your tasks
                            </p>
                        </div>
                        <button className="border-2 border-tinyyellow px-2 py-3 text-xs sm:w-1/3 rounded-md font-semibold">Get Started</button>
                    </div>
                </div>

                <div className="xs:hidden block w-full ">
                    <div className="flex flex-row justify-center mt-8">
                        <span id="btn-1"
                            onClick={() => handleClick(1)}
                            className="bg-tinyblue w-2 h-2 rounded-full"></span>
                        <span id="btn-2"
                            onClick={() => handleClick(2)}
                            className="bg-tinyblue w-2 h-2 rounded-full mx-3"></span>
                        <span id="btn-3"
                            onClick={() => handleClick(3)}
                            className="bg-tinyblue w-2 h-2 rounded-full"></span>
                    </div>

                </div>
            </div>

            {/* section 6 */}
            <div className="flex flex-col lg:items-center lg:text-center text-start px-3 md:pl-8 md:pr-36 lg:px-80 py-24 bg-brightblue text-white ">
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-12">Your work, everywhere you are</h2>
                <p className="text-xs mb-12">
                    Access your notes from your computer, phone or tablet by synchronising with various services,
                    including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux,
                    Android and iOS. A terminal app is also available!
                </p>
                <button
                    className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                    Try Taskey  <img src={vector} className='ml-1'></img>
                </button>
            </div>

            {/* section 7 */}
            <Contentlanding
                dataFromParent={[
                    '100% your data',
                    'The app is open source and your notes are saved to an open format, so you will always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.',
                    'Read more',
                    '',
                    'dataImg',
                    'change'
                ]} />

            {/* sponsor section */}
            <div className="flex flex-col px-3 lg:px-8 lg:py-10 pt-16">
                <div className="text-center">
                    <h2 className="text-3xl xs:text-7xl font-bold mb-8">Our sponsors</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row justify-between [&_img]:w-52 [&_img]:h-32 lg:px-0 px-5">
                    <img src={apple} className="px-12 py-8"></img>
                    <img src={microsoft1}></img>
                    <img src={slack}></img>
                    <img src={google}></img>
                </div>
            </div>

            {/* section 8 */}
            <div id='section8'
                className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start px-3 lg:px-8 py-16 lg:pb-16 bg-brightblue text-white">
                <div className="w-auto lg:my-auto mx-auto lg:px-10 my-16 lg:mt-0">
                    <img className='lg:w-[650px] lg:h-[450px]'
                        src={apps} ></img>
                </div>
                <div className="flex flex-col items-center lg:items-start my-auto">
                    <h2 className="text-3xl xs:text-6xl font-bold mb-12">Work with Your Favorite Apps Using whitepace</h2>
                    <p className="text-xs mb-12">
                        Whitepace teams up with your favorite software.
                        Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                    <button
                        className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/2'>
                        Read more  <img src={vector} className='ml-1'></img>
                    </button>
                </div>
            </div>

            {/* client section */}
            <div className="flex flex-col items-center px-3 lg:px-8 py-24">
                <div id="client-head" className="text-center mb-16">
                    <h2 className="font-bold text-3xl xs:text-6xl">What Our Clients Says</h2>
                </div>

                <div id="client-slide" className="flex justify-center items-center overflow-hidden w-full xs:pb-16">

                    <div id="first-client"
                        className='flex flex-col justify-center rounded-md p-6 
                        sm:min-w-[400px] sm:max-w-[400px] min-w-[280px] grow-0 xs:shadow-2xl shadow-md
                        hover:shadow-2xl'>
                        <div className="flex flex-col flex-wrap text-xs">
                            <img src={QuoteBlue} className="w-24 h-24 mr-3 my-5"></img>
                            <p>
                                Whitepate is designed as a collaboration tool for businesses
                                that is a full project management solution.</p>
                        </div>
                        <span className="w-full h-1 bg-gray-400 my-8"></span>
                        <div className="flex flex-col xs:flex-row">
                            <Avatar className="lg:mr-5 mb-8 xs:my-0">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <h4 className="font-semibold">Oberon Shaw, MCH</h4>
                                <p className="text-xs">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>

                    <div id="second-client"
                        className='flex flex-col justify-center rounded-md p-6 bg-tinyblue
                        sm:min-w-[400px] sm:max-w-[400px] min-w-[280px] grow-0 xs:shadow-2xl shadow-md mx-5
                        hover:shadow-2xl'>
                        <div className="flex flex-col flex-wrap text-xs">
                            <img src={QuoteWhite} className="w-24 h-24 mr-3 my-5"></img>
                            <p>
                                Whitepate is designed as a collaboration tool for businesses
                                that is a full project management solution.</p>
                        </div>
                        <span className="w-full h-1 bg-gray-400 my-8"></span>
                        <div className="flex flex-col xs:flex-row">
                            <Avatar className="mr-5 lg:mr-0 mb-8 xs:my-0">
                                <AvatarImage src="https://img.freepik.com/free-vector/man-wearing-eyeglasses-avatar-character_24877-83454.jpg?t=st=1718100790~exp=1718104390~hmac=fe39d00ec93998439b51708c4e044b8859142fc6edaad8cee3a5f921db09e909&w=740" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <h4 className="font-semibold">Oberon Shaw, MCH</h4>
                                <p className="text-xs">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>

                    <div id="third-client"
                        className='flex flex-col justify-center rounded-md p-6 bg-tinyblue
                        sm:min-w-[400px] sm:max-w-[400px] min-w-[280px] grow-0 xs:shadow-2xl shadow-md
                        hover:shadow-2xl'>
                        <div className="flex flex-col flex-wrap text-xs">
                            <img src={QuoteWhite} className="w-24 h-24 mr-3 my-5"></img>
                            <p>
                                Whitepate is designed as a collaboration tool for businesses
                                that is a full project management solution.</p>
                        </div>
                        <span className="w-full h-1 bg-gray-400 my-8"></span>
                        <div className="flex flex-col xs:flex-row">
                            <Avatar className="mr-5 lg:mr-0 mb-8 xs:my-0">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <h4 className="font-semibold">Oberon Shaw, MCH</h4>
                                <p className="text-xs">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden block w-full ">
                    <div className="flex flex-row justify-center mt-8">
                        <span id="btn-1"
                            onClick={() => handleClickClient(1)}
                            className="bg-tinyblue w-2 h-2 rounded-full"></span>
                        <span id="btn-2"
                            onClick={() => handleClickClient(2)}
                            className="bg-tinyblue w-2 h-2 rounded-full mx-3"></span>
                        <span id="btn-3"
                            onClick={() => handleClickClient(3)}
                            className="bg-tinyblue w-2 h-2 rounded-full"></span>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}


{/* <div id='section2'
                className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-start px-3 lg:px-8 py-16">
                <div className="flex flex-col items-center lg:items-start my-auto">
                    <h2 className="text-5xl font-bold mb-12">Project Management</h2>
                    <p className="text-xs mb-12">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button
                        className='flex flex-row justify-center items-center text-white bg-tinyblue px-2 py-4 rounded-sm text-xs lg:w-2/5 w-1/3'>
                        Try TasKey Free  <img src={vector} className='ml-1'></img>
                    </button>
                </div>
                <div className="lg:ml-3 ml-0 mt-24 w-auto lg:px-0 md:px-24 px-2 lg:my-auto">
                    <img src='https://i0.wp.com/goldrabbit.co.uk/wp-content/uploads/2022/07/White-Spaces-in-Graphic-Design.jpg?w=1800&ssl=1'></img>
                </div>
            </div> */}
