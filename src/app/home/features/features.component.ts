import { Component } from '@angular/core';
import {faGear,faGlobe,faBullseye,faMountainSun} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
faGear=faGear;
faGlobe=faGlobe;
faBullseye=faBullseye;
faMountain=faMountainSun;
}
