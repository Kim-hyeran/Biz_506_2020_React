import BackImg from './photo-1502481851512-e9e2529bfbf9.jpg';
import './App.css';
import BBSMain from "./main/BBSMain"

function App() {
  const background = {backgroundImage : `url(${BackImg})`, backgroundRepeat : "no-repeat", backgroundAttachment : "scroll", backgroundSize : "100wh 50vh"}
  return (
    <div className="App">
      <header className="App-header" style = {background}>
        <h3>REACT BBS 2020</h3>
        <p>react로 구현하는 게시판</p>
      </header>
      <section>
        <BBSMain />
      </section>
      <footer>
        <address>CopyRight &copy; <a href="https://github.com/Kim-hyeran">rankm</a></address>
      </footer>
    </div>
  );
}

export default App;
