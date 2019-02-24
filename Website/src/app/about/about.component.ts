import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  about:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.about;
  }
  setAbout(data){
    this.about=data[0];
  }
  ngOnInit() {
    this.DataService.getPersonalData().subscribe(data=>{this.setAbout(data)});  
  }
}
