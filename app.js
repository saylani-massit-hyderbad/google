



function gsignin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((res)=>{
        console.log(res.user)
    })
    .catch((err)=>{
        console.log(err)
    })

    console.log(provider)


}
