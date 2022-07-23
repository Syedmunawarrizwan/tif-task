import { React, useState } from "react"
import './App.css';
import ShortenUrlInput from "./components/ShortenUrlInput";
import ShortUrl from "./components/ShortUrl";
import Header from "./components/Header";
import BoostUrl from "./components/BoostUrl";
import Footer from "./components/Footer";

function App() {
  const [inputValue, setInputValue] = useState("")
  console.log(inputValue)

  return (
    <div className="App">
      <Header></Header>
      <ShortenUrlInput setInputValue={setInputValue}></ShortenUrlInput>
      <ShortUrl inputValue={inputValue} />
      <BoostUrl />
      <Footer></Footer>


    </div>
  );
}

export default App;
