import { useState } from "react"

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
            { blogs.map((blog) => (
                <div className="blog-preview" key = { blog.id }>
                    <h3>{ blog.title }</h3>
                    <p>Written by { blog.author }</p>
                </div>
            ) )}
        </div>
     );
}
 
export default Home;