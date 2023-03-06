const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('Welcome to Shopify Research App!'))

app.get("/shopify/appInstall",(req,res)=>{
  res.send("Shopify App Installation Step1 !");

  // // res.sendFile(__dirname + "/public/index.html");
  //  let employees = [{id:1,name:"Ram"},
  //                  {id:2,name:"RK"},
  //                  {id:3,name:"Manish"},
  //                  {id:4,name:"Abhijeet"},
  //                  {id:5,name:"Varun"}];
                   
  // res.sendFile("/index.html");
});

app.get("/shopify/recieveAuthCode",(req,res)=>{
  res.send("Shopify App Receive Authcode Step2 !");

  // // res.sendFile(__dirname + "/public/index.html");
  //  let employees = [{id:1,name:"Ram"},
  //                  {id:2,name:"RK"},
  //                  {id:3,name:"Manish"},
  //                  {id:4,name:"Abhijeet"},
  //                  {id:5,name:"Varun"}];
                   
  // res.sendFile("/index.html");
});

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`Onexlab app listening on port ${port}`);
  });
