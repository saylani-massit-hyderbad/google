


function fblogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((data)=>{
        var user = data.user
        console.log(user.displayName)
        console.log(user.photoURL)
        console.log(user.email)
    })
    .catch((err)=>{
        console.log(err)
    })
}
