import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlacesService } from '../services/places.service';
declare var google: any;
@Component({
	selector: 'university-search',
	templateUrl: './university-search.component.html',
	styleUrls: ['./university-search.component.scss']
})
export class UniversitySearchComponent implements OnInit {

	location: Location = {
		lng: 0,
		lat: 0
	};
	radius: number;
	universities: any = [];

	map: any;
	searchArgs: any;
	placesService: any;

	lastPage: boolean = false;

	searchMode: boolean = false;

	noResults: boolean = false;

	constructor(private ps: PlacesService, private cdRef: ChangeDetectorRef) {
	}


	ngOnInit() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {

				//Set current location coordinates
				this.location.lat = position.coords.latitude;
				this.location.lng = position.coords.longitude;
				this.cdRef.detectChanges();

				//Init map
				this.initMap(this.location);

				//Init places service
				this.placesService = new google.maps.places.PlacesService(this.map);

				//Marker that shows your current position
				this.initDefaultMarker();

			});
		}
	}

	// search universities function
	searchUniversities(radius: number) {
		this.searchMode = true;

		//Parameteres for searching nearby universities
		this.searchArgs = {
			location: this.location,
			radius: radius,
			types: ['university']
		};

		//Search nearby places
		this.placesService.nearbySearch(this.searchArgs, (results, status, pagination) => {
			//Show markers on the map
			this.showMarkers(results);
			//Detect all changes that will occur
			this.cdRef.detectChanges();
			//Store button for showing more results
			var moreButton = document.getElementById('more');
			//Show more results
			if (pagination.hasNextPage) {
				this.lastPage = false;
				this.cdRef.detectChanges();
				moreButton.addEventListener('click', function () {
					pagination.nextPage();
				});

			} else if (!pagination.hasNextPage) {
				this.lastPage = true;
				this.cdRef.detectChanges();
			}
		});
	} 

	showMarkers(places) {
		let bounds = new google.maps.LatLngBounds();

		//If there is no results to show on the view show warning message
		if (places.length === 0) {
			this.noResults = true;
		} else {
			this.noResults = false;
		}

		for (let i = 0, place; place = places[i]; i++) {

			//Marker icon
			let markerIcon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			//Generate a marker for each place
			let marker = new google.maps.Marker({
				map: this.map,
				icon: markerIcon,
				title: place.name,
				position: place.geometry.location
			});

			bounds.extend(place.geometry.location);

			//Push place to the university list
			this.universities.push(place);

		}

		//If universities length is greater than 60, remove duplicates that are showing in the list
		if (this.universities.length > 60) {
			this.universities.splice(40, 20);
		}

		console.log(this.universities);

	} // end of show markers function

	// Init map
	initMap(location) {
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: location,
			//street
			zoom: 15
		});
	}

	//Init default marker
	initDefaultMarker() {
		let defaultMarker = new google.maps.Marker({
			map: this.map,
			position: this.location,
			title: 'Your Current Location'
		});
	}
}

interface Location {
	lng: number;
	lat: number;
}