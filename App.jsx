// import { useState } from "react";
// import SentData from "./contexApiSec/SentData";
// import User from "./contextApi/User";


// function App(){

// const [name, setName]=useState('Anas')
// console.log( name);

//   return(

// <User.Provider value={[name, setName]}>





// <SentData/>


// </User.Provider>

   
//   )
// }

// export default App;


import UserDeatilas from "./components/UserDeatilas";


function App(){

  return(
    <>
    
    <div>

      <UserDeatilas/>
    </div>
    
    </>
  )
}

export default App;

