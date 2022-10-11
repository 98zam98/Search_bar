import { useEffect, useState } from "react";
import Store from "../store/Store";
import Card from "./Card";


const UserCard = () => {
    
  const [Data, setData] = useState(["none"]);
    const [ConfirmedSearchItem, setConfirmedSearchItem] = useState("");
    
    Store.subscribe(()=>{
      setConfirmedSearchItem(Store.getState());
    });

    
    

  useEffect(() => {
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()).then(data => {setData([...data])});
  }, []);


  
  return (
    <div className="user-cards" >
        
        {
            Data[0]==="none"?<div className="spinner">loading</div>:
            <div className="user-cards" >{Data.filter((user)=>(user.name.toLowerCase().includes(ConfirmedSearchItem) ||
              user.email.toLowerCase().includes(ConfirmedSearchItem))).map(user => <Card key={ user.name } Header={ user.name } Body={user.email} />)}</div>
        }
    </div>
  )
}

export default UserCard