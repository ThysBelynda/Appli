// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('AppliWithQuentin', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider

//page d'accueil
            .state('start', {
                url : '/start',
                abstract : true,
                views : {
                    'startView' : {
                        templateUrl : 'templates/auth/accueil.html'
                    }
                }
            })

            .state('start.welcome', {
                url : '/welcome',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/auth/start.html'
                    }
                }
            })

            .state('start.connexion', {
                url : '/connexion',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/auth/connexion.html'
                    }
                }
            })

            .state('start.inscription', {
                url : '/inscription',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/auth/inscription.html'
                    }
                }
            })

            .state('start.log', {
                url : '/log',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/auth/log.html'
                    }
                }
            })

//home
            .state('app', {
                url : '/app',
                abstract : true,
                views : {
                    'mainView' : {
                        templateUrl : 'templates/menu.html'
                    }
                }
            })

            .state('app.home', {
                url : '/home',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/catalogue/home.html'}
                }
            })

            .state('app.expoDetails',{
                url : '/expo/details',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/catalogue/details.html'
                    }
                }
            })

            .state('app.search', {
                url : '/search',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/search/when.html'
                    }
                }
            })

            .state('app.searchWhere', {
                url : '/searchWhere',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/search/where.html'
                    }
                }
            })

            .state('app.searchWhat', {
                url : '/searchWhat',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/search/what.html'
                    }
                }
            })

            .state('app.searchHowMany', {
                url : '/searchHowMany',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/search/howMany.html'
                    }
                }
            })

            .state('app.searchResults', {
                url : '/searchResults',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/search/results.html'
                    }
                }
            })

            .state('app.profil', {
                url : '/profil',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/profil/profil.html'
                    }
                }
            })

            .state('app.espace', {
                url : '/espace',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/profil/esp.html'
                    }
                }
            })

            .state('app.selection', {
                url : '/selection',
                views : {
                    'pageView' : {
                        templateUrl : 'templates/profil/selection.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/home');

    });

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

