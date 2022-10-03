const csv = require('csvtojson')
const fs = require ('fs')
const csvFilePath1='../data/deliveries.csv';
const csvFilePath2='../data/matches.csv'
csv()
.fromFile(csvFilePath1)
.then((jsonObj)=>{
     console.log(jsonObj);
    fs.writeFile('../public/deliveries.json', JSON.stringify(jsonObj, null, 4), (err)=>{
    if(err){
        throw err;
    }
})
});
csv()
.fromFile(csvFilePath2)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFile('../public/matches.json', JSON.stringify(jsonObj, null, 4), (err)=>{
        if(err){
            throw err;
        }
    })
})
