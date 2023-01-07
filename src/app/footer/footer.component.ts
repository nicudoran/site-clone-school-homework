import { Component } from '@angular/core';
import {faYoutube,faLinkedin,faFacebook,faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
faPhone=faPhone;
faYoutube=faYoutube;

}
