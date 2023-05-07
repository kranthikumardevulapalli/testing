const employee = require('../model/employe.model');

exports.getallemployees = async(req,res)=>{
    try{
        let emp_dtls = await employee.getallemployees();
        res.status(201).send({"employees":emp_dtls});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
};

exports.createemployee = async(req,res)=>{
    let emp = new employee({
        name : req.body.name,
        occupation: req.body.occupation,
        working_date: req.body.working_date,
        working_hours: req.body.working_hours
    });
    try{
        let create_employee = await employee.createemployee(emp);
        res.status(200).send({id: create_employee.insertId,...emp});
    }catch(err){
        res.status(400).send(err);
    }
};

exports.updateemployee = async(req,res)=>{
    let emp = new employee({
        emp_id            :req.body.emp_id,
        working_hours     :req.body.working_hours 
    });

        console.log(emp);
    try{
        let update_employee = await employee.updateemployee(emp);
        res.status(201).send({'message':'details updated'});
    }catch(err){
        res.status(400).send(err);
    }
};

exports.getemployee = async(req,res)=>{
    // let emp = new employee({
    //     emp_id : req.params.id
    // })
    try{
        let getemp = await employee.getemployee(req.params.id);
        res.status(200).send({'details':getemp});
    }catch(err){
        res.status(400).send(err);
    }
};
