import { MongoClient, ObjectId } from "mongodb";
import { Markup } from 'interweave';
// var XLSX = require("xlsx");
let xlsx = require('json-as-xlsx')
import moment from "moment";
import Head from "next/head";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

import React, { useState, useEffect } from 'react';
// import './App.css';



function App(props) {
  const bands=props.postt;
  const [data, setData] = useState(bands);
  const [sortType, setSortType] = useState('fq');
  const [order,setOrder]=useState(false);
  useEffect(() => {
    const sortArray = type => {
      const types = {
        fq: 'fq',
        eod: 'eod',
        overall: 'overall',
        ser:"ser",
        clean:"clean",
        date:"date"
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 
  function sorting(e){
    setSortType(e);
    const types = {
      fq: 'fq',
      eod: 'eod',
      overall: 'overall',
      ser:"ser",
      clean:"clean",
      date:"date"
    };
    // const sortProperty = types[type];
    const sorted = [...bands].sort((a, b) => b[sortType] - a[sortType]);
      setData(sorted);
  }
  function downloadexcel(){
    let dataa = [
      {
        sheet: 'sheet1',
        columns: [
          { label: 'Name', value: 'name' }, // Top level data
          { label: 'Email', value: row => (row.email) }, // Run functions
          { label: 'Food quality', value: row => (row.fq ) },
          { label: 'Service', value: row => (row.ser ) },
          { label: 'Ease of odering', value: row => (row.eod ) },
          { label: 'Cleanliness', value: row => (row.clean ) },
          { label: 'Overall', value: row => (row.overall ) },
          { label: 'Message', value: row => (row.message ) },
          { label: 'Date', value: row => (moment(row.date).format("MMMM Do YYYY") ) },
        ],
        content: data
      }
    ]
    
    let settings = {
      fileName: 'Sangmitra_review',
      extraLength: 3, 
      writeOptions: {} 
    }
    
    xlsx(dataa, settings) // Will download the excel file
  }
  return (
    <div >
      {/* <Head>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.1/xlsx.full.min.js"></script> 
      </Head> */}

      <body className="bg-gray-800 text-gray-100 px-2 py-6">
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">View Coustumer Review</h2>
      <select onChange={(e) => sorting(e.target.value)} className="text-white bg-gray-800"> 
        <option value="fq">Food Quality</option>
        <option value="eod">Ease of order</option>
        <option value="ser">Service</option>
        <option value="clean">Cleanliness</option>
        <option value="overall">Overall</option>
        <option value="date">Date</option>
      </select>
            <button type="button" className=" border-transparent  inline-block bg-white p-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            id="menu-button" aria-expanded="true" aria-haspopup="true"
            onClick={()=>downloadexcel()}
            >
      {/* {Lang} */}
      Download
      
      
    
     
    </button>

      <div
        className=" mt-24 px-2 grid gap-8 grid-cols-1 md:grid-cols-1 m bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        
        <div className="flex flex-col justify-between">
          
         
        <div >
      <div >
        <div >
          <div >
            <table className="min-w-full divide-y divide-gray-200" id="table1">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Food Quality
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ease of Odering
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cleanliness
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Overall
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                       
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.fq}</div>
                      <div className="text-sm text-gray-500">out of 5</div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.ser}</div>
                      <div className="text-sm text-gray-500">out of 5</div>
                    </td><td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.eod}</div>
                      <div className="text-sm text-gray-500">out of 5</div>
                    </td><td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.clean}</div>
                      <div className="text-sm text-gray-500">out of 5</div>
                    </td><td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.overall}</div>
                      <div className="text-sm text-gray-500">out of 5</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.message.length>7?person.message.substring(0, 6)+"...":person.message}</div>
                      {/* <div className="text-sm text-gray-500">out of 5</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{moment(person.date).format("MMMM Do YYYY")}</div>
                      {/* <div className="text-sm text-gray-500">out of 5</div> */}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <a href={"mailto:"+person.email} className="text-indigo-600 hover:text-indigo-900" target={"_blank"}>
                        Send Mail
                      </a>
                      <br/>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
        
        
      </div>
      </body>
    </div>
  );
}

export default App;


  
export async function getServerSideProps(context){
    // const idd=String(context.params.id);
    // const decryptedString = cryptr.decrypt(idd);
    // if(decryptedString!="valid"){
    //     return {
    //         props:{
    //           posts:null,
    //           valid:false
    //         }
    //     }
    // }
    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Sangmitra?retryWrites=true&w=majority');
const db=client.db();
const collection=db.collection('feedback');
    const All_feed=await collection.find().toArray();
//     const All_feed=[{name:"a",email:"a@gmail.com",message:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_mess",fq:5,eod:5,ser:5,clean:5,overall:5,date:12},
//     {name:"b",email:"b@gmail.com",message:"b_mess",fq:4,eod:4,ser:4,clean:4,overall:4,date:11}
// ]
    return {
        props:{
            postt:All_feed.map(post=>({
                name:post.name,
                email:post.email,
                message:post.message,
                fq:post.fq,
                eod:post.eod,
                ser:post.ser,
                clean:post.clean,
                overall:post.overall,
                date:post.date
      
              }))
            ,
          valid:true
        }
    }
}



