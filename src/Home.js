import { useState } from "react"

const Home = () => {
    const title = "This is the title of home page."
    const link = "https://www.google.com"
    const googleTitle = "Google Site"

    const [name, setName] = useState("Mario")
    const [age, setAge] = useState(25)


    const handleClick = () => {
        setName('Luigi')
        setAge(33)
    }

    return ( 
        <div className="Home">
            <h3>{ title }</h3>
            <a href={link}>{ googleTitle }</a>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click here!</button>
        </div>
     );
}
 
export default Home;