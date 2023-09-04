const Home = () => {
    const title = "This is the title."
    const link = "https://www.google.com"
    const googleTitle = "Google Site"

    return ( 
        <div className="Home">
            <h1>{ title }</h1>
            <a href={link}>{ googleTitle }</a>
            <p>{ Math.random() * 1000 }</p>
        </div>
     );
}
 
export default Home;