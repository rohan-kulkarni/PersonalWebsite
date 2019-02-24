import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:{};
  constructor(private DataService: DataService) {
  }
  getAbout(){
    return this.contact;
  }
  setAbout(data){
    this.contact=data[0];
  }
  ngOnInit() {
    this.DataService.getPersonalData().subscribe(data=>{this.setAbout(data)});  
  }

}
