(function() {
    
    function AuthService($firebaseAuth, $cookies) {
        var authObj = $firebaseAuth();
        
        return {
            newUser : function(email, password) {
                console.log("Running authservice newUser with " + email + password);
                var valueReturned = {};
                var createUser = new Promise(function(resolve,reject) {
                    authObj.$createUserWithEmailAndPassword(email, password)
                        .then(function(firebaseUser) {
                            $cookies.put('blocChatCurrentUser', email);
                            console.log("User " + firebaseUser.uid + " created successfully!");
                            resolve("success");
                        }).catch(function(error) {
                            console.error("Error in AuthService: ", error);
                            reject(error);
                        });
                });
                
                createUser.then(function() {
                    return "success";
                }).catch(function(error) {
                    return error;
                });
            },
            signIn: function(email, password) {
                authObj.$signInWithEmailAndPassword(email, password)
                    .then(function(firebaseUser) {
                        $cookies.put('blocChatCurrentUser', email);
                        console.log("Signed in as:", firebaseUser.uid);
                        return "success";
                    }).catch(function(error) {
                        console.error("Authentication failed:", error);
                        return error;
                    });
            },
            signOut: function() {
                authObj.$signOut();
                $cookies.put('blocChatCurrentUser', "");
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('AuthService', ["$firebaseAuth", "$cookies", AuthService]);
    
})();