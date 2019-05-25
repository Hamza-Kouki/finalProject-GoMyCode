var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/************************************************************************* */
/************************************************************************* */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBR7YJgRtM4yz_L28SHarwUh_SEBCOl6QQ",
    authDomain: "fir-contact-form-14137.firebaseapp.com",
    databaseURL: "https://fir-contact-form-14137.firebaseio.com",
    projectId: "fir-contact-form-14137",
    storageBucket: "fir-contact-form-14137.appspot.com",
    messagingSenderId: "715334786610"
  };
  firebase.initializeApp(config);

  //Reference messages collection 
  var messagesRef = firebase.database().ref('messages');
// Listner for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    //get values
var email = getInputVal('email') ; 
var username = getInputVal('username');
var password = getInputVal('password');
var firstname = getInputVal('firstname');
var lastname = getInputVal('lastname');
var days = getInputChekbox();
var gender = getInputRadio();
var textarea = getInputVal('textarea');


//save message
saveMessage(email , username , password , firstname , lastname , days , gender,textarea);
//alert message
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)
// clear form
document.getElementById('contactForm').reset();
}
//////////////////////////////////////////////////////////
//Function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}
//////////////////////////////////////////////////////////
//Function to get values from checkbox
function getInputChekbox(){
    //-------------------------------
    var Monday= null; var Tuesday = null;var Wednesday = null; var Thursday =null; var Thursday = null; var Friday =null;
if(document.getElementById('Monday').checked){
     Monday = document.getElementById('Monday').value;
}
if(document.getElementById('Tuesday').checked){
     Tuesday = document.getElementById('Tuesday').value;
}
if(document.getElementById('Wednesday').checked){
    Wednesday = document.getElementById('Wednesday').value;
}
if(document.getElementById('Thursday').checked){
    Thursday = document.getElementById('Thursday').value;
}
if(document.getElementById('Friday').checked){
    Friday = document.getElementById('Friday').value;
}

var array = [Monday, Tuesday, Wednesday, Thursday, Friday ]
//console.log(Monday, Tuesday, Wednesday, Thursday, Friday);
return array;
             
            }
       
//Function to get values form radio 
function getInputRadio(){
   var male =null ; var famele = null;

        if(document.getElementById('male').checked){
            male = document.getElementById('male').value;
        }
        if(document.getElementById('famele').checked){
            famele = document.getElementById('famele').value;
        }
        var  array = [famele , male ]
        return array;
      //  console.log(male ,famele)
    }
//////////////////////////////////////////////////////////


//save message to firebase
function saveMessage(email , username , password , firstname , lastname ,days , gender, textarea){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email : email,
        username : username,
        password : password,
        firstname : firstname , 
        lastname : lastname ,
        days: days,
        gender : gender,
        textarea : textarea , 
    });
}