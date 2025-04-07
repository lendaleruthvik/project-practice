var breakStart = document.getElementById('breakStart');
var breakEnd = document.getElementById('breakEnd');
var login = document.getElementById('logIn');
var logOut = document.getElementById('logOut')
let currentBreaskId = null;

breakStart.addEventListener('click', async() => {
    console.log('Break Started')
    const id = 1;
    fetch(`http://localhost:8000/api/attendance/${id}/breakStart`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({employee_id: 1})
    }).then(response => response.json()).then(data => {
        //console.log(data)
        currentBreaskId= data.break_id;
        breakStart.disabled = true;
        breakEnd.disabled = false;
    })
    .catch(err => {
        console.log('Error', err)
    })
    
})

breakEnd.addEventListener('click', async() => {
    const id = 1;
    console.log(currentBreaskId)
    fetch(`http://localhost:8000/api/attendance/${id}/breakEnd`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({employee_id: 1, break_id: currentBreaskId})
    }).then(response => response.json()).then(data => {
       
        //currentBreaskId= data.break_id;
        breakStart.disabled = false;
        breakEnd.disabled = true;
    })
    .catch(err => {
        console.log('Error', err)
    })
    // breakEnd.disabled = true;
    // breakStart.disabled = false;
    console.log('Break Ended')
})

breakEnd.disabled = true;