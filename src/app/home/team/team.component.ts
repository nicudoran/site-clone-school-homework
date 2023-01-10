import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  trainersList:any=[
    {name:"Ioana Vasile",
    job:"Manager in IT",
    image:"../../assets/trainers/team1.jpg",
    fbAccount:"https://www.facebook.com/profile.php?id=100001329398289",
    inAccount:"https://www.linkedin.com/in/ioana-vasile-15432269"
    },
    {name:"Laur Neagu",
    job:"Doctorand în Inteligență Artificială",
    image:"../../assets/trainers/team2.jpg",
    fbAccount:"https://www.facebook.com/laur.neagu.3",
    inAccount:"https://www.linkedin.com/in/laur-neagu-b338184b/"
    },
    {name:"Ancuta Nicu",
    job:"Dezvoltator Software",
    image:"../../assets/trainers/team3.jpg",
    fbAccount:"https://www.facebook.com/ancuta.nicu",
    inAccount:"https://www.linkedin.com/in/ancuta-nicu-548353b4/"
    },
    {name:"Eduard Cojocea",
    job:"Cercetător în Machine Learning",
    image:"../../assets/trainers/team4.jpg",
    fbAccount:"https://www.facebook.com/cojocea.mariuseduard",
    inAccount:"https://www.linkedin.com/in/eduard-cojocea-a003b28b/"
    },
    ]
}
