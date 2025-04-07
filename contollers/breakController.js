const connection = require('../config/db.js')

async function breakStartController(req, res){
    // const {employee_id, break_start, date} = req.body;
    try{
        
        const id = req.body.employee_id;
        const break_start = new Date().toTimeString().split(' ')[0];
        console.log(break_start)
        const date = new Date().toISOString().split('T')[0];
        const [data] = await connection.query('INSERT INTO breaks (employee_id, break_start, date ) VALUES (?, ?, ?)' , [id, break_start, date]);
        if(data){
            
            return res.json({
                success: true,
                break_id: data.insertId,
                message: "Break Start recorded successfully"
            })
        }
    
    }catch(err){
        return res.json({
            message: 'Error in break start API',
            error: err.message
        })
    }
}

async function breakEndController(req, res){
    try {
        const break_id = req.body.break_id;
        const id = req.body.employee_id;
        const break_end = new Date().toTimeString().split(' ')[0];
        console.log(break_end);
        const date = new Date().toISOString().split('T')[0];
        const [data] = await connection.query('UPDATE breaks SET break_end = ? WHERE break_id = ? ' , [break_end, break_id]);
        res.status(200).json({
            success: true,
            message: "Break End successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error in Break End"
        })
    }
}

module.exports = {breakStartController, breakEndController}