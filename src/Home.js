const Home = () => {
    const title = "This is the title of home page."
    const link = "https://www.google.com"
    const googleTitle = "Google Site"

    return ( 
        <div className="Home">
            <h3>{ title }</h3>
            <a href={link}>{ googleTitle }</a>
            <p>{ Math.random() * 1000 }</p>
        </div>
     );
}
 
export default Home;