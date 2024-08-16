import React, { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState<string>("");
  const [res, serRes] = useState<string>();

  const BASE_URL = process.env.REACT_APP_API_URL;
  console.log(`${BASE_URL}/url`);
  // useEffect(() => {
   
  // });

  const handleSubmit=()=>{
    console.log("clicked")
    fetch(`${BASE_URL}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({url:url}),
      mode:"cors"
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        serRes(data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className=" w-screen h-screen bg-stone-500 text-xl flex flex-col justify-center items-center">
      <div className="relative bottom-48 text-4xl text-green-400">
        <h1>Url Shortner</h1>
      </div>
      <div className=" relative bottom-12 flex space-x-8">
        <input
        className=" rounded-full pl-4"
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button className=" bg-amber-400 h-12 w-44 rounded-lg " onClick={handleSubmit}>Submit</button>
      </div>
      {
          res && 
            <div>
              <a
                href={`${BASE_URL}/${res}`} // The URL to navigate to
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practices for external links
                className="text-blue-500 underline" // Add some basic styling
              >
                Go to {`${BASE_URL}/${res}`}
              </a>
            </div>
          
  }
    </div>
  );
}

export default App;
