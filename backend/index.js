
const express =require("express");
const app=express();
const cors=require("cors");



const port=3000;
app.use(cors());

app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Magic of Cake & Co in the Heart of Mumbai",
  "Top 5 Reasons Mumbai Loves Cake & Co!",
  "Cake & Co: Where Taste Meets Tradition in Mumbai"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({
     name,
     location,
    rating: 4.3,
    reviews: 127,
    headline: randomHeadline
  });
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});

app.get("/",(req,res)=>{

  res.send("Hello World!")
})



app.listen(port,()=>(
    console.log("Server is running at http://localhost:",port,"🚀🚀🚀")
))
 

