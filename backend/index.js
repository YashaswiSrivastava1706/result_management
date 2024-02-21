const express= require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2');

const app=express();

app.use(cors());
app.use(bodyparser.json());



//database connection

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Yavi@1706',
    database:'student',
    port:3306
});

//check database connection

db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected.');
})


//get all data

app.get('/studentlist',(req,res)=>{
    console.log("1");

    let qr = 'select * from studentlist';

    db.query(qr,(err,result)=>{

                if(err)
                {
                    console.log(err,'errs');
                }

                if(result.length>0)
                {
                    res.send({
                        message:'all user data',
                        data:result
                        });
                }
    });
});

//get single data
app.get('/studentlist/:id',(req,res)=>{
    console.log("2");
    // console.log(req.params.id,'getid==>');
    let gID= req.params.id;

    let qr=`select * from studentlist where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else{
            res.send({
                message:'data not found'
            });
        }
    });
});

//create data
 app.post('/studentlist',(req,res)=>{
    console.log("3");

    console.log(req.body,'createdata');

    let rollnumber=req.body.rollnumber;
    let name=req.body.name;
    let email = req.body.email;
    let score = req.body.score;


    let qr = `INSERT INTO studentlist(rollnumber,name, email, score) VALUES ('${rollnumber}','${name}', '${email}', '${score}')`;

    db.query(qr,(err,result)=>{
        if(err) {console.log("Eroor Ayi gaoo",err);
        m='Error in inserting'+err;
        res.send({
            
            message:m,
        });}
        else{
        console.log(result,'result')
        res.send({
            message:'Result is inserted...',
        });
    }
    });

 });



//update data
app.put('/studentlist/:id',(req,res)=>{
    console.log("4");
    
    console.log(req.body,'updatedata');
    let gID= req.params.id;
    let rollnumber=req.body.rollnumber;
    let name=req.body.name;
    let email = req.body.email;
    let score = req.body.score;

    let qr=`update studentlist set rollnumber='${rollnumber}', name='${name}', email='${email}', score='${score}'
            where id=${gID}`;
    
            db.query(qr,(err,result)=>{
                    if(err) {console.log(err);}

                    res.send({
                        message:'Result updated'
                    });

            });
    });


    //delete single data
    app.delete('/studentlist/:id',(req,res)=>{
        console.log("5");

        let qID=req.params.id;

        let qr=`delete from studentlist where id='${qID}' `;
        db.query(qr,(err,result)=>{
            if(err) {console.log(err);}

            res.send(
                {
                    message:'Result deleted'
                }
            )
        });
    });

    //search data
    app.post('/studentlist/:rollnumber/:name',(req,res)=>{
        console.log("6");
        //console.log(req.params.id,'getid==>');
        console.log(req.body,'backendsearchdata');
        let rollnumber=req.params.rollnumber;
        let name=req.params.name;
        // let fullname=req.body.fullname;
        // let mb = req.body.mobile;
        console.log(rollnumber,'search variables')
        console.log(name,'search variables name wala')

        let qr = `Select * from studentlist where rollnumber='${rollnumber}' and name='${name}'`;
        console.log(qr,"QUERY RESULT");
        
          

        db.query(qr,(err,result)=>{

            if(err)
            {
                console.log(err,'errs');
            }
            if(result.length==0)
            {
                console.log(err,'INDEXXXXXXXXXXX');
                res.send({
                    message:'searched data',
                    data:[{id: 0,rollnumber: '00',name: 'NULL',email: 'NULL',score: 00}]
                    
                    });
            }

            if(result.length>0)
            {
                console.log(" i ",result);
                res.send({
                    message:'searched data',
                    data:result
                    
                    });
                    
            }
});
        });



app.listen(3000,()=>{
    console.log('server-running.');
});