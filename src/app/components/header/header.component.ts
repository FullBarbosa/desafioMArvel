import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
  }
  id!:any;

  ngOnInit(): void {
    console.log('Search String:' + window.location.search);
  }

}
