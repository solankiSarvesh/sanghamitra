// import "./styles.css";
import React, { useState } from "react";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');





export default function App() {
  const [added, setadded] = useState(false);
  const [wait, setWait] = useState(false);
  const [user, setUser] = useState({name:"",phone:"",email:"",fq:4,eod:4,clean:4,ser:4,overall:4,date:new Date(),message:""});
async function addingpost(){
//  console.log(user);
setWait(true);
  const response=await fetch('/api/addpost',{
    method:'POST',
body:(JSON.stringify(user)),
headers:{
    'content-type':'application/json'
}
  })
  setWait(false);
  setadded(true);
  window.location.assign('https://sanghamitra-resort.com/');

}
if(wait){
  return(
    <div>
      {/* <div className="float-right" onClick={getdetails}>login</div> */}
      <title>
        Sangmitra Feedback
      </title>
<body className="bg-gray-800 text-gray-100 px-8 py-6">
      
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">Lets talk about everything!</h2>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
       
        <div className="flex flex-col justify-between">
          Thank you for your valuable time 
          <br/>
          Please wait a moment ....
          </div>
          </div>
          </body>
          </div>
  )
}
else if(added){
  return(
    <div>
     <title>
        Sangmitra Feedback
      </title>
      
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
     <title>
        Sangmitra Feedback
      </title>
      
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
            <span className="uppercase text-sm text-gray-600 font-bold">Phone</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type='text'
              name="user[phone]"
        value={user.phone}
        onChange={e => setUser({ ...user, phone: (e.target.value) })}
              />
          </div>
          
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
            
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
    
    <label onClick={e => setUser({ ...user, fq: 1 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.fq==1? 'text-3xl':''}`} >🤬</label>
  </div>
  <div className="form-check form-check-inline">
   
    <label onClick={e => setUser({ ...user, fq: 2 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.fq==2? 'text-3xl':''}`} >🙁</label>
  </div>
  <div className="form-check form-check-inline">
    
    <label onClick={e => setUser({ ...user, fq: 3 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.fq==3? 'text-3xl':''}`} >😶</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, fq: 4 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.fq==4? 'text-3xl':''}`} >😁</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, fq: 5 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.fq==5? 'text-3xl':''}`} >😍</label>
  </div>
</div>

            
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Ease of Odering</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
            <div className="form-check form-check-inline ">
    
    <label onClick={e => setUser({ ...user, eod: 1 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.eod==1? 'text-3xl':''}`} >🤬</label>
  </div>
  <div className="form-check form-check-inline">
   
    <label onClick={e => setUser({ ...user, eod: 2 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.eod==2? 'text-3xl':''}`} >🙁</label>
  </div>
  <div className="form-check form-check-inline">
    
    <label onClick={e => setUser({ ...user, eod: 3 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.eod==3? 'text-3xl':''}`} >😶</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, eod: 4 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.eod==4? 'text-3xl':''}`} >😁</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, eod: 5 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.eod==5? 'text-3xl':''}`} >😍</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Service</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
            <div className="form-check form-check-inline ">
    
    <label onClick={e => setUser({ ...user, ser: 1 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.ser==1? 'text-3xl':''}`} >🤬</label>
  </div>
  <div className="form-check form-check-inline">
   
    <label onClick={e => setUser({ ...user, ser: 2 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.ser==2? 'text-3xl':''}`} >🙁</label>
  </div>
  <div className="form-check form-check-inline">
    
    <label onClick={e => setUser({ ...user, ser: 3 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.ser==3? 'text-3xl':''}`} >😶</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, ser: 4 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.ser==4? 'text-3xl':''}`} >😁</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, ser: 5 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.ser==5? 'text-3xl':''}`} >😍</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Cleanliness</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
            <div className="form-check form-check-inline ">
    
    <label onClick={e => setUser({ ...user, clean: 1 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.clean==1? 'text-3xl':''}`} >🤬</label>
  </div>
  <div className="form-check form-check-inline">
   
    <label onClick={e => setUser({ ...user, clean: 2 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.clean==2? 'text-3xl':''}`} >🙁</label>
  </div>
  <div className="form-check form-check-inline">
    
    <label onClick={e => setUser({ ...user, clean: 3 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.clean==3? 'text-3xl':''}`} >😶</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, clean: 4 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.clean==4? 'text-3xl':''}`} >😁</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, clean: 5 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.clean==5? 'text-3xl':''}`} >😍</label>
  </div>
</div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Overall Experience</span>
            <br/>
            <div className="flex justify-center space-x-8">
              
            <div className="form-check form-check-inline ">
    
    <label onClick={e => setUser({ ...user, overall: 1 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.overall==1? 'text-3xl':''}`} >🤬</label>
  </div>
  <div className="form-check form-check-inline">
   
    <label onClick={e => setUser({ ...user, overall: 2 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.overall==2? 'text-3xl':''}`} >🙁</label>
  </div>
  <div className="form-check form-check-inline">
    
    <label onClick={e => setUser({ ...user, overall: 3 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.overall==3? 'text-3xl':''}`} >😶</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, overall: 4 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.overall==4? 'text-3xl':''}`} >😁</label>
  </div>
  <div className="form-check form-check-inline">
    <label onClick={e => setUser({ ...user, overall: 5 })} className={`form-check-label ease-in text-2xl  duration-100 inline-block text-gray-800 ${user.overall==5? 'text-3xl':''}`} >😍</label>
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
