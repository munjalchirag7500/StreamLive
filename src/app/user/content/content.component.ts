import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  playVideo(){
    let url="https://sharer.pw/player/n5yhSuRyhlW";
    
  }

}
