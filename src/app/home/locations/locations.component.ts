import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    dotsEach:true,
    navSpeed: 1500,
    autoplay:true,
    autoplaySpeed:3000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  locationsArray:any=[
    {
    city:"București - Ilfov",
    image:"../../assets/locations/bucuresti.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/2"
  },
    {
    city:"Pitești - Argeș",
    image:"../../assets/locations/pitesti.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/3"
  },
    {
    city:"Cluj-Napoca - Cluj",
    image:"../../assets/locations/cluj.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/4"
  },
    {
    city:"Iași - Iași",
    image:"../../assets/locations/iasi.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/5"
  },
    {
    city:"Remote - clase online",
    image:"../../assets/locations/remote.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/6"
  },
    {
    city:"Brașov - Brașov",
    image:"../../assets/locations/brasov.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/8"
  },
    {
    city:"Ploiești - Prahova",
    image:"../../assets/locations/ploiesti.jpg",
    loc_link:"https://te-fac-programator.ro/location-details/1"
  },
]

}
