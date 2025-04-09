// import './Post.css';
import dammy from './images/dammy.jpg'

export default function Post() {
    return (
        <>
            <div className="flex border-b-2 border-gray-200 justify-center align-center sticky top-0 left-0 bg-white">
                <p className="post-text">For you</p>
                <p className="post-text">Following</p>
            </div>
            <div className='border-b-2 border-gray-200 pb-2 flex justify-center px-1 gap-2'>
                <img src={dammy} alt="Logo" className="w-12 h-12 m-2 rounded-full" />
                <div className='w-auto sm:w-full'>
                    <input type="text" placeholder="What's happening?" className='border-none border-grey-200 w-full p-2 mt-2 sm:text-xl outline-0' />
                    <div className='flex align-center justify-between m-auto w-full'>
                        <div className='flex'>
                            <p className='icon'>📷</p>
                            <p className='icon'>🖼️</p>
                            <p className='icon'>🌌</p>
                            <p className='icon'>🔘</p>
                            <p className='icon'>🙂</p>
                            <p className='icon'>📅</p>
                            <p className='icon'>📌</p>
                        </div>
                        <p className='bg-black text-white rounded-full text-center sm:text-lg px-6 py-1 cursor-pointer m-1'>Post</p>
                    </div>
                </div>
            </div>
        </>
    )
}