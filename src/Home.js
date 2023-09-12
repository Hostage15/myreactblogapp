import { useState } from "react"
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "The first blog", body: "lorem ipsum...", author: "Chuck", id: 1},
        {title: "A new day", body: "lorem ipsum...", author: "Chuck", id: 2},
        {title: "Cloud", body: "lorem ipsum...", author: "Chuck", id: 3}
    ])

    const handleClick = () => {
    }

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}
 
export default Home;