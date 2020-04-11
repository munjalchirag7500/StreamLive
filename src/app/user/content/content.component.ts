import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor(private user:UserService,private http:HttpClient) { }
  episodeData;
  link :any=[];
  ngOnInit(): void {
    this.user.fetchEpisode().subscribe(show=>{
      console.log(show)
      this.episodeData=show;
    });
  } 

}
