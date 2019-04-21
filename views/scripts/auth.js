//Connection to DB 
db.collections('news').get().then(snapshort =>{
  setupGuides(snapshort.docs)
})

// Listem for auth related changes 
auth.onAuthStateChanged(user =>{
  if(user){
    console.log('User Logged in : ', user)
  }else{
    console.log('User logged out');
  }
});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout
//const logout = document.querySelector('#logout');
//logout.addEventListener('click', (e) => {
//  e.preventDefault();
//  auth.signOut().then(() => {
//    console.log('user signed out');
//  })
//});

//login
const loginForm = document.querySelector('#signin-form');
loginForm.addEventListener('submit', (e) => {
 e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  console.log(email,password)


  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    loginForm.reset();
  })
});