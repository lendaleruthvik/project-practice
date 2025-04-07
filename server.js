const connection = require('./config/db.js');
const express = require('express');
const cors = require('cors')
const router = require('./routes/breakStartRoute.js');
// const logRoute = require('./routes/logInOutRoute.js')
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', router);
//app.use('/api/employee', logRoute)



connection.query('SELECT 1').then(() => {
    console.log('Connection established');
    app.listen(8000, () => {
        console.log("Server Lietening")
    })
}
)


/* 
Sign Up Page
Login Page
User Page
    Total workinh hours
    CheckIn/Out (button)
    Leave form
    Request Form (CheckIn/Out)
    LogOut button
    Leaves Taken(Left)
Admin Page
    Employee Information
    Employee Create/delete/update
    Total working hours
    Employee Reports
    Request from Handle/notifications
    checkIn/Out Edit 
    Monthly details of Employees (Color Gradient)

*/
