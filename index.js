const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

fs.mkdir('./data', (err) =>{
   if(err){
       console.log(err);
   }
  console.log(`Folder has been created`);
});

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`)
})
