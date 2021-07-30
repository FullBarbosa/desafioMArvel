import { MarvelApiService } from './../../shared/services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private marvelApiService: MarvelApiService) { }

  all!:any

   ngOnInit():  void {

    this.getMarvelApi();

  }

    getMarvelApi(){
      this.all = this.marvelApiService.getAllCharacters().subscribe((gibi: any) => {
        this.all = gibi;
        console.log(gibi)
      });
    }
}
