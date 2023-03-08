import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="Your perfect banking partner"
data1="Enter your A/c number"

// acno=""
// or

// acno:any   //decleration of data  ----bcz data comes when act on the change event so we must declere the data outside the function and the decleared function we access through the this.variablename at the inside of the function
// psw:any

userDetails:any={
  1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  1001:{username:"amal",acno:1001,password:"abc123",balance:0},
  1002:{username:"arun",acno:1002,password:"abc123",balance:0},
  1003:{username:"mega",acno:1003,password:"abc123",balance:0}
}

constructor(){}

ngOnInit(): void{

}

//method
// login(){
  // alert("login worked")
//   var acnum=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails

//   if (acnum in userDetails){
// if(psw==userDetails[acnum]["password"]){
//   alert('login success')
// }else{
//   alert('incurrect password')
  
// }
//   }else{
//     alert('incurrect account number')
    //  } 
//}
    



login(acnum:any,psw:any){

  console.log(acnum.value,psw.value);

  var acnum=acnum.value
  var psw=psw.value
  
  // alert("login worked")
  
  var userDetails=this.userDetails


  if (acnum in userDetails){
if(psw==userDetails[acnum]["password"]){
  alert('login success')
}else{
  alert('incurrect password')
  
}
  }else{
    alert('incurrect account number')
  }
    
}
}
