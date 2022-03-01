// import "./styles.css";
import React, { useState } from "react";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');



// function getdetails(){
//   const name=prompt('Enter your id');
//   if(name=="vijay"){
//     const encryptedString = cryptr.encrypt('valid');
//     window.location.href = `/admin/${encryptedString}`
//   }
// }

export default function App() {
  const [added, setadded] = useState(false);
  const [user, setUser] = useState({name:"",email:"",fq:4,eod:4,clean:4,ser:4,overall:4,date:new Date(),message:""});
async function addingpost(){
//  console.log(user);

  const response=await fetch('/api/addpost',{
    method:'POST',
body:(JSON.stringify(user)),
headers:{
    'content-type':'application/json'
}
  })
  
  setadded(true);
  window.location.assign('https://sanghamitra-resort.com/');

}
if(added){
  return(
    <div>
      {/* <div className="float-right" onClick={getdetails}>login</div> */}
      
<body className="bg-gray-800 text-gray-100 px-8 py-6">
      
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">Lets talk about everything!</h2>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
       
        <div className="flex flex-col justify-between">
          Thank you for your valuable time 
          <br/>
          Hope you Enjoyed :)
          </div>
          </div>
          </body>
          </div>
  )
}
else{
  return (
     <div>
      {/* <div className="float-right" onClick={getdetails}>login</div> */}
      
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
              name="user[name]"
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}

              type="text" placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="user[email]"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
              />
          </div>
          
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
            
              className="w-full h-64 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="user[message]"
        value={user.message}
        onChange={e => setUser({ ...user, message: e.target.value })}
              ></textarea>
          </div>
          
          
          
        </div>
          </div>
          
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Food Quality</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
  <div className="form-check form-check-inline ">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[fq]"  value="1"
    onClick={e => setUser({ ...user, fq: 1 })}
    
    />
    <label className="form-check-label inline-block text-gray-800" >1</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[fq]"value="2"
    onClick={e => setUser({ ...user, fq: 2 })} />
    <label className="form-check-label inline-block text-gray-800" >2</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[fq]"value="3"
    onClick={e => setUser({ ...user, fq: 3 })} />
    <label className="form-check-label inline-block text-gray-800" >3</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[fq]"value="4"
    onClick={e => setUser({ ...user, fq: 4 })} />
    <label className="form-check-label inline-block text-gray-800" >4</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[fq]"value="5"
    onClick={e => setUser({ ...user, fq: 5 })} />
    <label className="form-check-label inline-block text-gray-800" >5</label>
  </div>
</div>

            
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Ease of Odering</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
  <div className="form-check form-check-inline ">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[eod]"  value="1"
    onClick={e => setUser({ ...user, eod: 1 })}
    
    />
    <label className="form-check-label inline-block text-gray-800" >1</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[eod]"value="2"
    onClick={e => setUser({ ...user, eod: 2 })} />
    <label className="form-check-label inline-block text-gray-800" >2</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[eod]"value="3"
    onClick={e => setUser({ ...user, eod: 3 })} />
    <label className="form-check-label inline-block text-gray-800" >3</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[eod]"value="4"
    onClick={e => setUser({ ...user, eod: 4 })} />
    <label className="form-check-label inline-block text-gray-800" >4</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[eod]"value="5"
    onClick={e => setUser({ ...user, eod: 5 })} />
    <label className="form-check-label inline-block text-gray-800" >5</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Service</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
  <div className="form-check form-check-inline ">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[ser]"  value="1"
    onClick={e => setUser({ ...user, ser: 1 })}
    
    />
    <label className="form-check-label inline-block text-gray-800" >1</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[ser]"value="2"
    onClick={e => setUser({ ...user, ser: 2 })} />
    <label className="form-check-label inline-block text-gray-800" >2</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[ser]"value="3"
    onClick={e => setUser({ ...user, ser: 3 })} />
    <label className="form-check-label inline-block text-gray-800" >3</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[ser]"value="4"
    onClick={e => setUser({ ...user, ser: 4 })} />
    <label className="form-check-label inline-block text-gray-800" >4</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[ser]"value="5"
    onClick={e => setUser({ ...user, ser: 5 })} />
    <label className="form-check-label inline-block text-gray-800" >5</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Cleanliness</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
  <div className="form-check form-check-inline ">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[clean]"  value="1"
    onClick={e => setUser({ ...user, clean: 1 })}
    
    />
    <label className="form-check-label inline-block text-gray-800" >1</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[clean]"value="2"
    onClick={e => setUser({ ...user, clean: 2 })} />
    <label className="form-check-label inline-block text-gray-800" >2</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[clean]"value="3"
    onClick={e => setUser({ ...user, clean: 3 })} />
    <label className="form-check-label inline-block text-gray-800" >3</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[clean]"value="4"
    onClick={e => setUser({ ...user, clean: 4 })} />
    <label className="form-check-label inline-block text-gray-800" >4</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[clean]"value="5"
    onClick={e => setUser({ ...user, clean: 5 })} />
    <label className="form-check-label inline-block text-gray-800" >5</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Overall Experience</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
  <div className="form-check form-check-inline ">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[overall]"  value="1"
    onClick={e => setUser({ ...user, overall: 1 })}
    
    />
    <label className="form-check-label inline-block text-gray-800" >1</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[overall]"value="2"
    onClick={e => setUser({ ...user, overall: 2 })} />
    <label className="form-check-label inline-block text-gray-800" >2</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[overall]"value="3"
    onClick={e => setUser({ ...user, overall: 3 })} />
    <label className="form-check-label inline-block text-gray-800" >3</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[overall]"value="4"
    onClick={e => setUser({ ...user, overall: 4 })} />
    <label className="form-check-label inline-block text-gray-800" >4</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input form-check-input  rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="user[overall]"value="5"
    onClick={e => setUser({ ...user, overall: 5 })} />
    <label className="form-check-label inline-block text-gray-800" >5</label>
  </div>
</div>
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
}
