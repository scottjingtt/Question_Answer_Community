import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {

	@Input() universities:any;
	@Input() radius: any;

	constructor(private ps: PlacesService) { }

	ngOnInit() {

	}

}
