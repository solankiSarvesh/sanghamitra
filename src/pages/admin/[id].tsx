import { MongoClient, ObjectId } from "mongodb";
import { Markup } from 'interweave';
import { useState } from "react";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

export default function Example(props){
    const [details, setDetails] = useState(props.postt);
    
        // details_set();

    return (
        <div>
      
      
<body className="bg-gray-800 text-gray-100 px-8 py-6">
      
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">Lets talk about everything!</h2>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-2 md:grid-cols-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
       
        <div className="flex flex-col justify-between">
          
         
          hello there
        </div>
        {details.map((post) => (
            <div>
                <div className="flex flex-col justify-between">
                {post.name}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.email}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.message}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.fq}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.eod}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.ser}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.clean}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.overall}
            </div>
            </div>
            
            
        ))}
        {details.map((post) => (
            <div>
                <div>
                {post.date}
            </div>
            </div>
            
            
        ))}
        
        
        
      </div>
      
    </body>
     </div>









       
      
    )
  }
  
export async function getServerSideProps(context){
    const idd=String(context.params.id);
    const decryptedString = cryptr.decrypt(idd);
    if(decryptedString!="valid"){
        return {
            props:{
              posts:null,
              valid:false
            }
        }
    }
    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Sangmitra?retryWrites=true&w=majority');
const db=client.db();
const collection=db.collection('feedback');
    // const All_feed=await collection.find().toArray();
    const All_feed=[{name:"a",email:"a@gmail.com",message:"a_mess",fq:5,eod:5,ser:5,clean:5,overall:5,date:12},
    {name:"b",email:"b@gmail.com",message:"b_mess",fq:4,eod:4,ser:4,clean:4,overall:4,date:11}
]
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



