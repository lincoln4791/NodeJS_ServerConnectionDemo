
const mysql  = require('mysql')

const databaseConnectionConfig ={
    host :"localhost", user : "root", password : "", database : "school"
}

const con  = mysql.createConnection(databaseConnectionConfig)
con.connect(function(error){
    if(error){
        console.log("connection Fail")
    }
    else{
        console.log("connection Success")
        insertData()
        selectData()
    }
})

function insertData(){
    let SQL_QUERY = "INSERT INTO `students`(`name`, `class`, `age`, `phone`) VALUES ('Lincoln','MSC','30','01670878110')"
    con.query(SQL_QUERY,function (error){
        if(error){
            console.log("Data insert Failed")
        }
        else{
            console.log("Data Insert Success")
        }
    })
}

function deleteData(){
    let SQL_QUERY = "DELETE FROM `students` WHERE id='1' "
    con.query(SQL_QUERY,function (error){
        if(error){
            console.log("Data Delete Failed")
        }
        else{
            console.log("Data delete Success")
        }
    })
}

function updateData(){
    let SQL_QUERY = "UPDATE `students` SET class='BSC' WHERE id='2'"
    con.query(SQL_QUERY,function (error){
        if(error){
            console.log("Data update Failed")
        }
        else{
            console.log("Data update Success")
        }
    })
}


function selectData(){
    let SQL_QUERY = "SELECT `id`, `name`, `class`, `age`, `phone` FROM `students`"
    con.query(SQL_QUERY,function (error,result){
        if(error){
            console.log("Data Select Failed")
        }
        else{
            console.log(result)
        }
    })
}