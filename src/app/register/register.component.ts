import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


acno:any
psw:any
uname:any


constructor(private ds:DataService){}

ngOnInit(): void{

}

register(){
var acno=this.acno
var psw=this.psw
var uname=this.uname

const result=this.ds.register(acno,uname,psw)

if(result){     //true
alert('registered')
}else{   //false
alert('user already present')
}
}
}
