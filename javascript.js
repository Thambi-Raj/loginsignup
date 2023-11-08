function ok(name){
    document.getElementById(name).style.border='none';
    console.log(name);
}
function rem(){
   var type= document.getElementById('password1').type;
   if(type=='text'){
    document.getElementById('password1').type='password';
   }
   else{
    document.getElementById('password1').type='text';
   }
}
function transition(){
  console.log('opop');
  document.getElementsByClassName('login')[0].style.marginLeft='60%';
  document.getElementsByClassName('imagecl')[0].style.marginLeft='-93%';
  document.getElementById('log').reset();
  setTimeout(()=>{
    window.location.href='signup.html';
  },5000)
  
}
function transition1(){
  console.log('opop');
  document.getElementsByClassName('register')[0].style.marginLeft='-105%';
  document.getElementsByClassName('imag')[0].style.marginLeft='45%';
  document.getElementById('sig').reset();
  setTimeout(()=>{
    window.location.href='index.html';
  },5000)
}
function pin1(){
  document.getElementById('pas').placeholder='pin';
  document.getElementById('confirm-pass').placeholder='confirm pin';
  document.getElementById('pass').checked=false;
}
function passcheck(){
  document.getElementById('pas').placeholder='password';
  document.getElementById('confirm-pass').placeholder='confirm password';
  document.getElementById('pin').checked=false;
}

var sub=0;
function checkuser(){
  
  var name=document.getElementById('name').value;
  // for username
  if(/\d/.test(name) || /[!@#$%^&*()_+[\]{};':"\\|,.<>?/]/.test(name)){
    document.getElementById('field1').style.border='1px solid #F67171'
    document.getElementById('field1').style.boxShadow='10px'
    document.getElementById('uname').style.display='block';
  }
  else{
    document.getElementById('field1').style.border='1px solid rgb(199, 194, 194)'
    document.getElementById('field1').style.boxShadow='10px'
    document.getElementById('uname').style.display='none';
  }    
  console.log(sub+'name');
}

function checkemail(){
  var email=document.getElementById('email').value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var o= emailPattern.test(email);
  if(!o ){ 
      console.log(sub+"email");
      document.getElementById('emailwarn').style.display='block';
      document.getElementById('field2').style.border='1px solid #F67171'
      document.getElementById('field2').style.boxShadow='10px #F67171'
  }
  else{
    document.getElementById('field2').style.border='1px solid rgb(199, 194, 194)'
    document.getElementById('field2').style.boxShadow='10px'
    document.getElementById('uname').style.display='none';
  }
  console.log(sub+'mail');
}

function checkmobile(){
  
  var mobile=document.getElementById('mobile').value;
  if(/[!@#$%^&*()_+[\]{};':"\\|,.<>?/a-zA-Z]/.test(mobile) ) {
    console.log('mobile');
    document.getElementById('mobilewarn').style.display='block';
    document.getElementById('field3').style.border='1px solid #F67171'
    document.getElementById('field3').style.boxShadow='10px #F67171'
  }
  else{
    document.getElementById('mobilewarn').style.display='none';
    document.getElementById('field3').style.border='1px solid rgb(199, 194, 194)'
    document.getElementById('field3').style.boxShadow='10px'
  }
  console.log(sub+'mobile');
}
function checkdigit(digit){
  var mobile=document.getElementById('mobile').value;
  if(mobile.length!=digit){
    document.getElementById('mobilewarn').innerHTML='Mobile number must be 10 digits';
    document.getElementById('mobilewarn').style.display='block';
    document.getElementById('field3').style.border='1px solid #F67171'
    document.getElementById('field3').style.boxShadow='10px #F67171'
  }
  else{
    document.getElementById('mobilewarn').style.display='none';
    document.getElementById('field3').style.border='1px solid rgb(199, 194, 194)'
    document.getElementById('field3').style.boxShadow='10px '
  }
  console.log(sub+'mobile');
}
function checkpassword(name){
  var password=document.getElementById('pas').value;
  if(name=='Password'){
   
    var upper = /[A-Z]/.test(password);
    var lower = /[a-z]/.test(password);
    var special = /[!@#$%^&*()_+[\]{};':"\\|,.<>?/]/.test(password);
    var number = /\d/.test(password);
    var t= upper && lower && special && number;
    if(!t){
       document.getElementById('warnpin').style.display='block';
       document.getElementById('warnpin').innerHTML='Password consists of Uppercase,lowercase,specialCharcters,Numbers';
       document.getElementById('field5').style.border='1px solid #F67171'
       document.getElementById('field5').style.boxShadow='10px #F67171'
    } 
    else{
      document.getElementById('warnpin').style.display='none';
      document.getElementById('field5').style.border='1px solid rgb(199, 194, 194)';
    }
  }
  else{
     if(password.length<6){
      document.getElementById('warnpin').style.display='block';
      document.getElementById('warnpin').innerHTML='Pin Must be 6 letters';
      document.getElementById('field5').style.border='1px solid #F67171'
      document.getElementById('field5').style.boxShadow='10px #F67171'
     }
     else{
      document.getElementById('warnpin').style.display='none';
      document.getElementById('field5').style.border='1px solid rgb(199, 194, 194)';
     }

  }
  console.log(sub+'pin');
}

function confirm(){
  var pass=document.getElementById('pas').value;
  var confirm=document.getElementById('confirm-pass').value;
  if(confirm!=pass){
    sub=-1;
    document.getElementById('warnconfirm').style.display='block';
    document.getElementById('field6').style.border='1px solid #F67171'
    document.getElementById('field6').style.boxShadow='10px'
  }
  else{
    document.getElementById('warnconfirm').style.display='none';
    document.getElementById('field6').style.border='1px solid rgb(199, 194, 194)'
  }
  console.log(sub+'confirm');
}
function register(){
  console.log('befotre'+sub);
  var name1=document.getElementById('name').value;
var email=document.getElementById('email').value;
var mobile=document.getElementById('mobile').value;
var password=document.getElementById('pas').value;
var confirm=document.getElementById('confirm-pass').value;
var dob=document.getElementById('dob').value;
  console.log(name1+" "+email+" ");
if(name1=='' ){
  sub=-1;
  document.getElementById('field1').style.border='1px solid #F67171'
  document.getElementById('field1').style.boxShadow='10px'
  document.getElementById('uname').style.display='block';
  document.getElementById('uname').innerHTML='Please enter a Value';
}
if(email==''){
  sub=-1;
      document.getElementById('emailwarn').style.display='block';
      document.getElementById('field2').style.border='1px solid #F67171'
      document.getElementById('field2').style.boxShadow='10px #F67171'
      document.getElementById('emailwarn').innerHTML='Please enter a Value';
}
if(mobile==''){
  sub=-1;
  document.getElementById('mobilewarn').style.display='block';
  document.getElementById('field3').style.border='1px solid #F67171'
  document.getElementById('field3').style.boxShadow='10px #F67171'
  document.getElementById('mobilewarn').innerHTML='Please enter a Value';
}
if(password==''){
  sub=-1;
  document.getElementById('warnpin').style.display='block';
  document.getElementById('warnpin').innerHTML='Please enter a value';
  document.getElementById('field5').style.border='1px solid #F67171'
  document.getElementById('field5').style.boxShadow='10px #F67171'
}
if(confirm==''){
  sub=-1;
  document.getElementById('warnconfirm').style.display='block';
  document.getElementById('field6').style.border='1px solid #F67171'
  document.getElementById('field6').style.boxShadow='10px'
  document.getElementById('warnconfirm').innerHTML='Please enter a value';
}
const elements = document.getElementsByClassName('warn');
for (let i = 1; i < elements.length; i++) {
    if(elements[i].style.display=='block' ){
      console.log(elements[i]);
      document.getElementById('warnmsg').innerHTML='please verify your form';
      document.getElementById('warnmsg').style.display='block'; 
      sub=-1;
    }
}
console.log(sub+"final");
if(sub==0){
  var x=localStorage.getItem(mobile);
  var y=localStorage.getItem(email)
  if(x!=null){
    document.getElementById('warnmsg').innerHTML='mobile number already exits';
    document.getElementById('warnmsg').style.display='block';
  }
  else if(y!=null){
    document.getElementById('warnmsg').innerHTML='email already exits';
    document.getElementById('warnmsg').style.display='block';
  }
  else{
    localStorage.setItem(mobile,password);
    localStorage.setItem(email,password);
    localStorage.setItem(name1,password);  
    transition1();
  }
}
}
function login(){
    var username9=document.getElementById('usern').value;
    var pass=document.getElementById('password1').value;
    var em=localStorage.getItem(username9);
    console.log(em);
    if(em==null || em!=pass){
      document.getElementById('loginerr').style.display='block';
    }
    else{
      window.location.href='content.html';
    }
    
}