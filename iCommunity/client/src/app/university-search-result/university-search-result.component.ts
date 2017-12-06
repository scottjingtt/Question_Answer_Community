import { Component, OnInit, Input } from '@angular/core'
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'university-search-result',
  templateUrl: './university-search-result.component.html',
  styleUrls: ['./university-search-result.component.sass']
})
export class UniversitySearchResultComponent implements OnInit {

	@Input() universities:any;
	@Input() radius: any;

	constructor(private ps: PlacesService) { }

	ngOnInit() {

	}

}
