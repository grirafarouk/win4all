import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private  activatedRout:Router){}
  routingValue=""
  ngOnInit(): void {
  this.activatedRout.events.subscribe(e=>{if (e instanceof NavigationEnd){console.log(e);
    this.routingValue=e.url;

  
  }})
  }
  title = 'winForAll';
  changescreen(e){
 this.routingValue=e
  }
}


