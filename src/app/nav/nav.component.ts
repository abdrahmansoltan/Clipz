import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault(); // so that the page doesn't go to route: '#'
    this.modal.toggleModal('auth');
  }
}
