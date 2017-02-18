(function(){
    
    function SignInModalCtrl($uibModalInstance, $firebaseAuth, $cookies) {
        var self = this;
        
        this.authObj = $firebaseAuth();
        this.email = "";
        this.password = "";
        this.errorMessages = "";
        
        this.ok = function() {
            if (this.email && this.password) {
                
                this.credentials = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
                
                this.authObj.$signInWithCredential(this.credentials)
                    .then(function(firebaseUser) {
                        $cookies.put('blocChatCurrentUser', self.email);
                        console.log("User " + firebaseUser.uid + " Logged in!");
                        $uibModalInstance.close();
                    }).catch(function(error) {
                        console.error("Error in AuthService: ", error);
                        self.errorMessages = "Error: "+error.message;
                    });
                
                
            } else {
                this.errorMessages = "Please enter your email and password";
                console.log("error signinmodalctrl.js");
            }
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('SignInModalCtrl', ['$uibModalInstance', '$firebaseAuth', '$cookies', SignInModalCtrl]);
    
})();