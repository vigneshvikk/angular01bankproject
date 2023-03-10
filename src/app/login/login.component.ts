import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

acno:any//two way binding it must initialize data,also same data will write on the ngnodel...it is the easiest way
psw:any





constructor(private router:Router,private ds:DataService){}

ngOnInit(): void{

}

//method
login(){
  // alert("login worked")
  var acnum=this.acno
  var psw=this.psw
  var userDetails=this.ds.userDetails

  if (acnum in userDetails){
if(psw==userDetails[acnum]["password"]){
  alert('login success')

  //redirection
  this.router.navigateByUrl("dashboard")


}else{
  alert('incurrect password')
  
}
  }else{
    alert('incurrect account number')
     } 
}
    



}
