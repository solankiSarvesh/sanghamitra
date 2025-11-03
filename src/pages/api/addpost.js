// /api/new-meetup
// var datat={
//     title: (document.getElementById("title") as HTMLInputElement).value,
//     email:(document.getElementById("email") as HTMLInputElement).value,
//     category: { name: (document.getElementById("category") as HTMLInputElement).value},
//     description:(document.getElementById("description") as HTMLInputElement).value,
//     date: new Date(),
//     datetime: String(new Date().getFullYear()+" "+new Date().getMonth()+" "+new Date().getDate()),
//     imageUrl:(document.getElementById("image") as HTMLInputElement).value,
//     readingTime: (document.getElementById("reading_time") as HTMLInputElement).value,
//     author: {
//       name: (document.getElementById("author_name") as HTMLInputElement).value,
//       href: (document.getElementById("link") as HTMLInputElement).value,
//       },
//   }
import {MongoClient} from 'mongodb'
async function handler(req,res){
    // const {title ,email ,category ,description,date,datetime,imageUrl,readingTime,author}=req.data;
    res.setHeader('Access-Control-Allow-Origin', '*'); // or specific origin
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  );

  if (req.method === 'OPTIONS') {
    // preflight request
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.setHeader('Allow', 'POST, OPTIONS').status(405).json({ error: 'Method Not Allowed' });
  }
    console.log(req.body);   

    const data=req.body;
//     const obj = JSON.parse(sendData);

//     const {title ,email ,category ,description,date,datetime,imageUrl,readingTime,author}=data;
const client=await MongoClient.connect('mongodb+srv://viveksolanki:vivek123@cluster0.wjlbtgs.mongodb.net/sangmitra?retryWrites=true&w=majority');
const db=client.db();



const meetupsCollections=db.collection('feedback');
const result=await meetupsCollections.insertOne(data);
console.log(result.description);
client.close();

res.status(201).json({message: 'data inserted'});


}

export default handler;