import './App.css';

function App() {
  const title = "This is the title."
  const link = "https://www.google.com"
  const googleTitle = "Google Site"

  return (
    <div className="App">
      <h1>{ title }</h1>
      <a href={link}>{ googleTitle }</a>
      <p>{ Math.random() * 1000 }</p>
    </div>
  );
}

export default App;
