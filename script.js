let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

document.getElementById('registrationForm').addEventListener('click', function (e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(username, email, password);
    // //hashed
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(password, salt);

    //Check if the user already exist in the system
    if (users.some(user => user.email === email)) {
        alert('Email already registered, kindly login');
        return;
    }

    //New user saving
    users.push({
        username,
        email,
        password
    });

    //If the user does not exist, then create new user
    
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration Successful! Please proceed to login');
    window.location.href = 'login.html'; // This takes you to login page
});

if (localStorage.getItem('loggedInUser')) {
    window.location.href = 'homepage.html';
    console.log('done');
}

document.querySelector('loginForm').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

})
// document.getElementById('loginForm').addEventListener('click', function(e) {
//     e.preventDefault();

    
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log(email, password);
    
//     //getting all users
//     // const users = JSON.parse(localStorage.getItem('users')) || [];
    
//     // //finding match users in the system
//     // const user = users.find(u => u.email === email && u.password === password);
    
//     // if (user) {
//     //     localStorage.setItem('loggedInUser', JSON.stringify(user));
//     //     alert('login successful');
//     //     window.location.href = 'homepage.html';
//     // } else {
//     //     alert('You have entered an invalid email or passwords')
//     // }



//     // if (user && bcrypt.compareSync(password, user.password)) {
//     //     localStorage.setItem('currentUser', JSON.stringify({
//     //         username: user.username,
//     //         email: user.email
//     //     }));
//     //     window.location.href = 'home.html';
//     // } else {
//     //     alert('Invalid credentials!');
//     // }
// });