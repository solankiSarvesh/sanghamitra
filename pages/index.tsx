// import "./styles.css";
import React, { useState } from "react";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');



function getdetails(){
  const name=prompt('Enter your id');
  if(name=="vijay"){
    const encryptedString = cryptr.encrypt('valid');
    window.location.href = `/admin/${encryptedString}`
  }
}

export default function App() {
  const [added, setadded] = useState(false);
async function addingpost(){
 

//   const response=await fetch('../api/addposttodb',{
//     method:'POST',
// body:(JSON.stringify(datat)),
// headers:{
//     'content-type':'application/json'
// }
//   })
  
  // setadded(true);
  

}
  return (
     <div>
      <div className="float-right" onClick={getdetails}>login</div>
      
<body className="bg-gray-800 text-gray-100 px-8 py-6">
      
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">Lets talk about everything!</h2>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
       
        <div className="flex flex-col justify-between">
          
          <div>
           
            
            <div className="">
            
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold"> Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
            
              className="w-full h-64 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          
          
          
        </div>
          </div>
          
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Food Quality</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Ease of Odering</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Service</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Cleanliness</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Overall Experience</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
          </div>
          <div className="mt-2">
            <button
            onClick={addingpost}
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Submit Message
            </button>
          </div>
        </div>
        
      </div>
      
    </body>
     </div>
    );
  
  
}
