import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  countries: Country[] = [];

  constructor(private countryService: CountryService){}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getCountries().subscribe(
      data => this.countries = data,
      error => console.error('Erreur lors du chargement de la liste des pays :', error)
    );
  }

}
