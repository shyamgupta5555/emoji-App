import { useEffect, useState } from "react";
import { emojiData } from "./comonent/emoji";
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [copySuccess, setCopySuccess] = useState(null);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  

    const copyToClipBoard = async copyMe => {
       try {
           await navigator.clipboard.writeText(copyMe);
           setCopySuccess('Copied!');
       } 
       catch (err) {
            setCopySuccess('Failed to copy!');
       }
       window.alert(copySuccess)
    };
   


  return (
    <>
      <p
        className="container m-2 p-4 "
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color:"white"
      
        }}
      >
        😀 Search Emoji ....😎 !
      </p>

      <div className="container"
      
      style={{
        textAlign: "center",
        marginBottom:"10px",
        
        }}
      >
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder=" Emoji Search............."
          style={{
            width: "50%",
            height: "3rem",
            fontSize: "2rem",
          }}
        ></input>
      </div>
      <div className="container">
        {data.map((i, index) => {
          return (
            <span
            onClick={()=>{copyToClipBoard(i.symbol)}}
              className="container"
              style={{
                fontSize: "4rem",
                boxShadow: "gray",
                cursor: "pointer"
              }}
            >
              {i.symbol}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default App;
