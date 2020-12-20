let email = document.getElementById("Email");
let error = document.getElementById("emailerror");
let phn = document.getElementById("phoneNo");
let error1 = document.getElementById("error1");

function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phoneno =/^\(?([0-9]{3})\)?[-.]?(0-9){3})[-.]?([0-9]{4})$/;
  if(regexp.test(email.value)){
 error.innerHTML="email accepted";
error.style.color="green";
// // if(phoneno.test(phn.value)){
// //     error1.innerHTML="phone number accepted";
// //     error1.style.color="green";
// 
   
return true;

  }
  else
    {
        error.innerHTML="Invalid Email address";
        error.style.color="red";
        // error1.innerHTML="invalid phone number";
        // error1.style.color="red";
return false;
    }
}

function passwordChanged() {
  var strength = document.getElementById('strength');
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  var pwd = document.getElementById("password");
  if (pwd.value.length == 0) {
      strength.innerHTML = 'Type Password';
  } else if (false == enoughRegex.test(psw.value)) {
      strength.innerHTML = 'More Characters';
  } else if (strongRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:green">Strong!</span>';
  } else if (mediumRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:orange">Medium!</span>';
  } else {
      strength.innerHTML = '<span style="color:red">Weak!</span>';
  }
}