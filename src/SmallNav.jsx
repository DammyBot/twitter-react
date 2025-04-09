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

export default function SmallNav() {
    return (
        <div className='block sm:hidden'>
            <div className='flex w-full py-2 fixed bottom-0 left-0 justify-center bg-white'>
                <img src={home} alt="home" className="images" />
                <img src={search} alt="home" className="images" />
                <img src={space} alt="home" className="images" />
                <img src={bell} alt="home" className="images" />
                <img src={message} alt="home" className="images" />
                <img src={user} alt="home" className="images" />
            </div>
            <div className='flex w-full py-2 sticky top-0 left-0 justify-evenly bg-white'>
                <img src={dammy} alt="Image" className='rounded-full w-12 h-12' />
                <img src={x} alt="home" className="w-7 h-7 my-2 stroke-white stroke-2 cursor-pointer" />
                <p className='btn'>Update</p>
            </div>
            <img src={feather} alt="home" className="w-16 h-16 my-1 mx-auto stroke-white stroke-2 cursor-pointer bg-gray-200 p-2 rounded-full hover:scale-105 transition-all fixed bottom-18 right-5" />
        </div>
    )
}