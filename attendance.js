import express from "express";
import Attendance from "./attendanceModel.js";
import connectDB from "./teachersdb.js";
connectDB();
Attendance
const app=express();
app.use(express.json());

const attendance=[{
   
studentstotal:"525",
teacherstotal:"20",
staffstotal:"15"


}]


app.get("/api/attendance",(req,res) =>
{
    try{
        res.status(200).send(attendance);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
app.post("/api/attendancedetails",async(req,res)=>{
    try{
        const attendance={
            studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
           
        }
        console.log(attendance);
        var create=new Attendance(attendance);
        var attendanceCreated=await create.save();
      
        if(attendanceCreated){
            console.log("created");
        res.status(201).json({message:"show details"});
        }
else{
    res.status(401);
    throw new error("not found");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
app.put('/api/attendance/:id',(req,res)=>{
    console.log(req.params.id);
    Attendance.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_attendancedetails:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    app.delete("/api/attendance/:id",(req,res)=>{
        console.log(req.params.id);
        Attendance.deleteOne({_id:req.params.id},{
            $set:{
               
                studentstotal:req.body.studentstotal,
                teacherstotal:req.body.teacherstotal,
                staffstotal:req.body.staffstotal
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_attendancedetails:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        app.delete("/api/attendance",(req,res)=>{
    
            Teachers.deleteMany({attendance},(err,result)=>{
            if(err) throw err
            res.send(attendance)
            })
        })
const port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(attendance);
});