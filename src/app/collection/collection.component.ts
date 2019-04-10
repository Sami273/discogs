import { Component, OnInit } from '@angular/core';
import { DiscogsService } from '../discogs.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private discogsService: DiscogsService, private router: Router) { }

  private collection:any = [];
  public randomRelease;

  ngOnInit() {
    this.getCollection();
    console.log(this.collection);
  }

  getCollection() {
    this.discogsService.getCollection()
      .subscribe(data => {
        this.collection.push(data);
        console.log(data);
        this.selectRandom();
      });
  }

  selectRandom(){
    const collecLength = this.collection[0].releases.length;
    this.randomRelease = this.collection[0].releases[Math.floor(Math.random() * collecLength)];
    console.log(this.randomRelease);
  }

}
