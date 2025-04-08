document.addEventListener('DOMContentLoaded', function() {

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'login.html';
} else {

    //Display username on the dashboard
    const welcomeElement = document.getElementById('welcomeUser');
    if (welcomeElement) {
        welcomeElement.textContent = currentUser.username;
    }

    //logout button 
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {

            //clear user
            localStorage.removeItem('currentUser');

            //Now after removing goto login page
            window.location.href = 'login.html';
        });
    }
}

});