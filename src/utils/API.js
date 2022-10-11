
const API = () => {
    
    // console.log("API")
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => {let x=res.json(); console.log(x); console.log(res);})
    // .then(data => {console.log(data)});
    
    
    // console.log("API")
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {console.log("done");let x=res.json();x.then(() => {console.log("res done"); console.log(x);},() => {console.log("res lost");})},() => {console.log("lost");})
    
    
    console.log("API")
    

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => {console.log("done");let x=res.json(); console.log(x); console.log(res); return x;})
    // .then(data => {console.log(data)});
    let Data_Return = [];

    
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json()).then(data => {console.log(data)});
    

    
    // let data= fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json());

    
    
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json()).then(data => {Data_Return=[...data]}).then(() => {console.log(Data_Return)});
    
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()).then(data => {Data_Return=[...data]});

    
    return Data_Return
    
    
}

export default API



