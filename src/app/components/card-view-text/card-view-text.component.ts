import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-view-text',
  templateUrl: './card-view-text.component.html',
  styleUrls: ['./card-view-text.component.css']
})
export class CardViewTextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  roter(): void {
    this.router.navigate([`catalog/227`]);
  }

}
