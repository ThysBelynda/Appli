(function() {
    //Initialize Firebase

    const config = {
        apiKey: "AIzaSyD7aq7ORCJlIpYKUXsEGNPdANyzywEIA2o",
        authDomain: "appliwithbely.firebaseapp.com",
        databaseURL: "https://appliwithbely.firebaseio.com",
        storageBucket: "appliwithbely.appspot.com",

    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const txtLogin = document.getElementById('txtLogin');
    const txtSignUp = document.getElementById('txtSignUp');
    const txtLogout = document.getElementById('txtLogout');

    // Bouton
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signWithEmailAndPassword(email, pass);
    promise.catch(e = > console.log(e.message));

});

    // Add signup event
    btnSignUp.addEventListener('click', e => {
        // Get email and pass
        // TODO : Check for real emails
        const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.CreateUserWithEmailAndPassword(email, pass);
    promise.catch(e = > console.log(e.message));

});

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
});

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('pas connecté');
    btnLogout.classList.add('hide');
}
});


}());