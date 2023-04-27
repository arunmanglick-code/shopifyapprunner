const express = require('express')
const app = express()
app.use(express.json());

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('Welcome to Shopify Research App!'))

app.get("/shopify/appInstall",(req,res)=>{
  res.send("Shopify App Installation Step1 !");
});

app.post('/shopify/webhook/orderfulfilled', (req, res) => {
  
  console.log('Order Fulfilled Webhook Started.....!!!!');
  var webhookBody= req.body;
  console.log('Order_Fulfilled Webhook Paylaod Received: ', webhookBody);
  return res.status(200).send({ success: true });
});

app.post('/shopify/webhook/refundscreate', (req, res) => {
  
  console.log('Refunds Create Webhook Started.....!!!!');
  var webhookBody= req.body;
  console.log('Refunds_Create Webhook Paylaod Received: ', webhookBody);
  return res.status(200).send({ success: true });
});


app.get("/shopify/recieveAuthCode",(req,res)=>{
  res.send("Shopify App Receive Authcode Step2 !");
});

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`Onexlab app listening on port ${port}`);
  });
