const dbconnection = require('../database/db.js');

const Employee = function(employee){
    this.emp_id         = employee.emp_id;
    this.name           = employee.name;
    this.occupation     = employee.occupation;
    this.working_date   = employee.working_date;
    this.working_hours  = employee.working_hours;
};

Employee.getallemployees = (req,res)=>
    new Promise((resolve,reject)=>{
    let query = 'select * from employee';
    dbconnection.query(query,(err,res)=>{
        if(err){
            reject(err);
        }else{
            resolve(res);
        }
    });
});

Employee.createemployee = (emp)=>
    new Promise((resolve,reject)=>{
        let query = 'insert into employee set ?';
        dbconnection.query(query,emp,(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        })
});

Employee.updateemployee = (empdetails)=>
    new Promise((resolve,reject)=>{
        // console.log(empdetails);
        let query = 'update employee set working_hours = ? where emp_id = ?';
        dbconnection.query(query,[empdetails.working_hours,empdetails.emp_id],(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });

Employee.getemployee = (empid)=>
    new Promise((resolve,reject)=>{
        let query = 'select * from employee where emp_id = ?';
        dbconnection.query(query,empid,(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        });
    });

module.exports = Employee;