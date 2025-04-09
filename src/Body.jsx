import Cards from "./Cards"
import Nav from "./Nav"
import Post from "./Post"
import Sidebar from "./Sidebar"
import dammy from './images/dammy.jpg'
import SmallNav from "./SmallNav"

export default function Body() {
    return (
        <div className="max-w-[90vw] m-auto">
            <SmallNav />
            {/* <Post /> */}
            <div className="flex align-top w-full m-auto">
                <Nav />
                <div className="border-r-2 border-l-2 border-gray-200 w-full m-auto">
                    <Post />
                    <div className="p-2 m-auto">
                        <Cards img={dammy} name="John Doe" />
                        <Cards img={dammy} name="John Doe" />
                    </div>
                </div>
                <Sidebar />
            </div>
            {/* <Sidebar /> */}
        </div>
    )
}