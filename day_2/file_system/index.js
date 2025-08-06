
const fs=require('fs');
let data="hi i am kratika agarwal"
fs.writeFile('kratika.txt',data,{
    encoding:"utf-8",
    flag:'w'
},(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("written successfully")
    }

});
/*fs.readFile('kratika.txt',{
    encoding:'utf-8',
    flag:'r'
},(err,data)=>{
    if(err){
        throw err;
    }
    else{
        console.log(data.toString())
    }
})*/

fs.appendFile('kratika.txt',"hi my naam",{
    encoding:'utf-8',
    flag:'a'
},(err)=>{
    if(err){
        throw err
    }
    else{
        console.log("done")
    }

})


/* fs.unlink('kratika.txt',(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("kr dia delete")
    }
})*/


