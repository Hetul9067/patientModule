// src/app/components/search-filter/search-filter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  searchTerm: string = '';

  performSearch() {
    console.log('Searching for:', this.searchTerm);
    // Logic to perform search goes here
  }
}
