import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 userlength:boolean=false
  title = 'tdform1';
  userArr: Array<any> = []

  contactmsg = [
    {
      mode: 'Phone',
      id: '1'
    },
    {
      mode: 'Email',
      id: '2'
    }
  ]

  Onsubmit(singUp: NgForm) {
    if (singUp.valid) {
      console.log(singUp);
      let obj = { ...singUp.value, subscribe: singUp.value['subscribe'] === true ? 'yes' : 'No' }
      this.userArr.push(obj)
      singUp.reset()
    }

  }

  onkeyup(eve:Event){
    console.log((eve.target as HTMLInputElement).value.length);
    let lenght=(eve.target as HTMLInputElement).value.length
    console.log(lenght);
    if(lenght>=12){
      this.userlength=true
    }
  
  }
}
