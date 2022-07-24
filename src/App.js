import { React, useState } from "react"
import './App.css';
import ShortenUrlInput from "./components/ShortenUrlInput";
import ShortUrlListAndBrandRecognition from "./components/ShortUrlListAndBrandRecognition";
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
      <ShortUrlListAndBrandRecognition inputValue={inputValue} />
      <BoostUrl />
      <Footer></Footer>


    </div>
  );
}

export default App;
