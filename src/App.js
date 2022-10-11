import { useEffect, useState } from "react";
import { Card, Search, UserCard } from "./component";
import API from "./utils/API";

function App() {

  // const [Data, setData] = useState("none");

  // useEffect(() => {
  
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json()).then(data => {setData([...data])});
  // }, []);
  

  // useEffect(() => {
  //   console.log("Data");
  //   console.log(Data);
  // }, [Data]);
  
  return (
    <div className='App' > 
      <Search/>
      <UserCard/>
    </div>
  );
}

export default App;
