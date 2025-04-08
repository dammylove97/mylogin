document.addEventListener('DOMContentLoaded', function() {

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    
    console.log('script loaded successful');
    
    const regForm = document.getElementById('registrationForm');
        if(regForm) {
            regForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                console.log(username, email, password);
                // //hashed
                // const salt = bcrypt.genSaltSync(10);
                // const hashedPassword = bcrypt.hashSync(password, salt);
            
                //Check if the use  r already exist in the system
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

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailRegex.test(email)) {
                    alert('Please enter a valid email');
                    return;
                }
            
        });
        }
    
    if (localStorage.getItem('currentUser')) {
        window.location.href = 'homepage.html';
        console.log('done');
    }
    
    // document.querySelector('loginForm').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;
    //     console.log(email, password);
    
    // })
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // console.log(email, password);
        
        //getting all users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        //finding match users in the system
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('login successful');
            window.location.href = 'homepage.html';
        } else {
            alert('You have entered an invalid email or passwords')
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
           // alert('You have input an incorrect email');
           console.log('good');
            return;
        } else {
            alert('You have input an incorrect email');   
        }

    });
    }
            
    
    
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


});

