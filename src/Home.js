const Home = () => {
    const title = "This is the title of home page."
    const link = "https://www.google.com"
    const googleTitle = "Google Site"

    const handleClick = () => {
        console.log("CLICKED!!!")
    }

    const handleClickAgain = (name) => {
        console.log(name + "!!!!!")
    }

    return ( 
        <div className="Home">
            <h3>{ title }</h3>
            <a href={link}>{ googleTitle }</a>
            <p>{ Math.random() * 1000 }</p>
            <button onClick={handleClick}>Click here!</button>
            <button onClick={() => handleClickAgain("What")}>Click Again!</button>
        </div>
     );
}
 
export default Home;