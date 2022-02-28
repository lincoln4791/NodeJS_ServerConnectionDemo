
const mysql  = require('mysql')

const databaseConnectionConfig ={
    host :"localhost",
    user : "root",
    password : ""
}

const con  = mysql.createConnection(databaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log("connection Fail")
    }
    else{
        console.log("connection Success")
    }
})


