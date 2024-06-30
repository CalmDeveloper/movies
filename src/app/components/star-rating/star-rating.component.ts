import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() voteAverage: number;
  @Input() isLarge: boolean = false;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
