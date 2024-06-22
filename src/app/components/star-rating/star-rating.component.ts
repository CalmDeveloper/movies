import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input()
  voteAverage: number;
  stars: number[];
  constructor() {
    this.stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}
