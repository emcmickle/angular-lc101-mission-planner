import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  selectedMember: object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member : object) {
    let foundMember: boolean = false;
    for(let i = 0; i<this.crew.length; i++) {
      if(this.crew[i]["name"] == member["name"]) {
        foundMember = true;
        this.crew[i]["selected"] = false;
        this.crew.splice(i, 1);
        break;
      }
    }
    if(!foundMember && this.crew.length < 3) {
      member["selected"] = true;
      this.crew.push(member);
    }
  }

  setSelectedMember(member : object) {
    this.selectedMember = member;
  }

  clearSelectedMember() {
    this.selectedMember = null;
  }
    
}
