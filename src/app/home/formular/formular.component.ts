import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit{
  fullName:string="";
  email:string="";
  phoneNo:string="";
  modul:string="";
  extras:string="";
  promoCode:string="";
  consent:boolean=false;
  myData:any={};
  stringifiedData:any;

ngOnInit() {}

getFullName(event:any){
this.fullName=event.target.value;
}
getEmail(event:any){
this.email=event.target.value;
}
getPhoneNo(event:any){
this.phoneNo=event.target.value;
}
getOption(event:any){
this.modul=event.target.value;
}
getExtras(event:any){
this.extras=event.target.value;
}
getPromoCode(event:any){
this.promoCode=event.target.value;
}
getConsent(event:any){
this.consent=event.target.checked;
}
onClickSubmit(){
  if(this.consent){
    this.myData={
      "nume_prenume":this.fullName,
      "email":this.email,
      "telefon":this.phoneNo,
      "modul":this.modul,
      "detalii":this.extras
    };
    this.stringifiedData = JSON.stringify(this.myData);
    console.log("With Stringify :" , this.stringifiedData);

  }else{
    alert("You did not consent our privacy policy!")
  }
}

}
