import { Component,OnInit} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

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

    options:any = {
    "126": "Modulul 1",
    "127": "Modulul 2",
    "128": "Modulul 3",
    "129": "Modulul 4"};

  ngOnInit() {
  }


getConsent(event:any){
this.consent=event.target.checked;
}
myForm=new FormGroup({

})



onSubmit(f: NgForm) {
  if(this.consent){

    this.fullName=f.value.fullName;
    this.email=f.value.email;
    this.phoneNo=f.value.phoneNo;
    var optiune=f.value.modul;
    this.extras=f.value.extras;
    this.promoCode=f.value.promoCode;

    this.modul=this.options[optiune];

    this.myData={
      "nume_prenume":this.fullName,
      "email":this.email,
      "telefon":this.phoneNo,
      "modul":this.modul,
      "detalii":this.extras
    };

  if (this.fullName&&this.email&&this.phoneNo&&this.modul) {

  this.stringifiedData = JSON.stringify(this.myData);
  console.log("Detalii persoana interesata :" , this.stringifiedData);

  (document.getElementById('myForm') as HTMLFormElement).reset();
  alert("Felicitari "+this.fullName+"\nTe-ai inscris cu succes!")

  this.fullName="";
  this.email="";
  this.phoneNo="";
  this.modul="";
  this.extras="";
  this.promoCode="";
  this.consent=false;
  window.scrollTo(0, 0);}
  else{
    alert("Nu ai completat toate campurile necesare - Nume si prenume ,Adresa de email, Numar de telefon si Selecteaza un modul!")

    }
    }
    else{
    alert("Trebuie sa iti dai acordul pentru prelucrarea datelor cu carcater personal!")
  }
}
}
