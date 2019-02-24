import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workex:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.workex;
  }
  setAbout(data){
    this.workex=data[0];
    console.log(this.workex);
  }
  ngOnInit() {
    this.DataService.getworkExData().subscribe(data=>{this.setAbout(data)});  
  }

}
