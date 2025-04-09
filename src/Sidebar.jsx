import search from './images/search.svg'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='flex gap-1 border-2 border-gray-200 rounded-full p-2 mt-1'>
                <img src={search} alt="Search" className='w-4' />
                <input type="text" placeholder="Search" className='outline-0' />
            </div>
            <div className='sidebody'>
                <p className='text-lg font-bold'>Subscribe to Premium</p>
                <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                <p className='btn '>Subscribe</p>
            </div>
            <div className='sidebody'>
                <p className='text-lg font-bold'>What's happening</p>
            </div>
            <div className='sidebody'>
                <p className='text-lg font-bold'>Who to follow</p>

            </div>
        </div>
    )
}