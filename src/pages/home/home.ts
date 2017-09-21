import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  musicArray = [];

  constructor(public navCtrl: NavController, public http: Http) {
    let url = "https://itunes.apple.com/search?term=bodyslam";

    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data.results);
        this.musicArray = data.results;
      })
  }

}
