// import './Nav.css'
import x from './images/x.svg'
import home from './images/home.svg'
import search from './images/search.svg'
import bell from './images/notification.svg'
import message from './images/message.svg'
import people from './images/people.svg'
import user from './images/users.svg'
import space from './images/space.svg'
import verify from './images/verify.svg'
import lightning from './images/lightining.svg'
import feather from './images/feather.svg'
import dammy from './images/dammy.jpg'

export default function Nav() {
    return (
        <>
            <div className='hidden sm:flex flex-col w-50 h-screen py-5 sticky top-0 left-0 gap-5 justify-center'>
                <img src={x} alt="home" className="images" />
                <div className='flex flex-col gap-2 my-2'>
                    <img src={home} alt="home" className="images" />
                    <img src={search} alt="home" className="images" />
                    <img src={bell} alt="home" className="images" />
                    <img src={message} alt="home" className="images" />
                    <img src={space} alt="home" className="images" />
                    <img src={user} alt="home" className="images" />
                    <img src={verify} alt="home" className="images" />
                    <img src={lightning} alt="home" className="images" />
                    <img src={people} alt="home" className="images" />
                    <img src={feather} alt="home" className="w-12 h-12 my-1 mx-auto stroke-white stroke-2 cursor-pointer bg-gray-200 p-2 rounded-full" />
                </div>
                <img src={dammy} alt="Image" className='rounded-full w-12 h-12 mx-auto' />
            </div>
        </>
    )
}