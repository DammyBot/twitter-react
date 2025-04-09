// import './Cards.css';

export default function Cards(props) {
    return (
        <>
            <div className='flex gap-2 p-2 align-top bg-white m-auto border-b-2 border-gray-200'>
                <img src={props.img} alt={props.name} className='rounded-full w-12 h-12 mx-auto' />
                <div className='pb-2'>
                    <p>{props.name}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ut neque veritatis eius laboriosam iste saepe nemo ullam esse distinctio eum atque, fugit libero adipisci. Modi ipsa dignissimos atque aspernatur recusandae maiores, assumenda voluptatibus fugiat saepe quisquam quia, quos vero adipisci veritatis temporibus placeat natus quo doloremque eius tempore voluptas. Dolores nobis doloribus iste odit quia ipsum deleniti illo vero exercitationem porro necessitatibus, expedita autem excepturi. Dicta beatae assumenda rerum odit, ducimus consequuntur velit accusantium.</p>
                    <div className='max-w-[70vw] h-48 border-2 border-black rounded-xl mx-auto my-2'></div>
                </div>
            </div>
        </>
    )
}