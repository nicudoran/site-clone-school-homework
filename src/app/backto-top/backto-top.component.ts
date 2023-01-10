import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backto-top',
  templateUrl: './backto-top.component.html',
  styleUrls: ['./backto-top.component.css']
})
export class BacktoTopComponent implements OnInit{

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
