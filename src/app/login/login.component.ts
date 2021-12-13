import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 login:Login= new Login();

 users:Login[]=[];
  
 constructor(private route:Router) { }

  ngOnInit(): void {
    this.users.push({"uname":"sachin","pwd":"123","role":"admin"});
    this.users.push({"uname":"ravi","pwd":"1234","role":"user"});
    this.users.push({"uname":"kumar","pwd":"1234","role":"user"});

  }

  doLogin()
  {  
   let users= this.users.filter(user=>user.uname==this.login.uname && user.pwd==this.login.pwd);
    if(users.length > 0)
    {
      
      localStorage.setItem("uname",users[0].uname);
      localStorage.setItem("urole",users[0].role);
      this.route.navigateByUrl("/");
    }

  }
}
