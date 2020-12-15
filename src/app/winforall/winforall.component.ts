import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-winforall',
  templateUrl: './winforall.component.html',
  styleUrls: ['./winforall.component.css']
})
export class WinforallComponent implements OnInit {

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
