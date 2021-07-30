import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelApiService } from 'src/app/shared/services/marvel-api.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private marvelApiService: MarvelApiService,private router: Router) { }

  collections!:any

   ngOnInit():  void {

    this.getMarvelApi();

  }

    getMarvelApi(){
      this.collections = this.marvelApiService.getAllCharacters().subscribe((data: any) => {

        console.log(data)

        this.collections = data
      });
    }

    roteId(id: any): void {
      this.router.navigate([`catalog/${id}`]);
    }
}
