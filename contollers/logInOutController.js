// const connection = require('../config/db.js');

// const logIn = async(req, res) => {
//     try {
//         const id = 1;
//         const login_time = new Date().toTimeString().split(' ')[0];
//         const date = new Date().toISOString().split('T')[0];
//         await connection.query('INSERT INTO attendance (employee_id, login_time, date ) VALUES (?, ?, ?)' , [id, login_time, date])
//     } catch (error) {
        
//     }
// }