import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdform1';
  userObj:Array<any>=[]

  contactmsg=[
    {
      mode:'Phome',
      id:'1'
    },
    {
      mode:'Email',
      id:'2'
    }
  ]

  onSubmit(signup:NgForm){
    console.log(signup);  
  if(signup.valid){
    let obj=signup.value
    this.userObj.push(obj)
    signup.resetForm()
  }
  }
}
