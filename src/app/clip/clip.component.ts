import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
})
export class ClipComponent implements OnInit {
  id = '';

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    // update id-value when it change in the url
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
}
