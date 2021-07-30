import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],

})
export class ModalInfoComponent implements OnInit {

  @Output() modalEvent = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
  }


}
