import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import metadata from 'libphonenumber-js/metadata.min.json';
import { getCountryCallingCode, CountryCode } from 'libphonenumber-js/core';
import { CommonModule } from '@angular/common';
import * as countries from 'i18n-iso-countries';
// @ts-ignore
import * as enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './countries.component.html'
})
export class CountriesComponent {
  items: any[] = [];
  countryCallingCodes = {};

  constructor() {
    this.getAllCountryCallingCodes();
  }

  getAllCountryCallingCodes = () => {
    const countryCallingCodes: { [key: string]: string } = {};
    let countriesArray = []

    for (const country of Object.keys(metadata.countries) as CountryCode[]) {
      const countryCode = getCountryCallingCode(country, metadata);
      const countryName = countries.getName(country, 'en');

      countriesArray.push({
        country: country,
        code: `+${countryCode}`,
        isoAlpha2: this.getCountryISOAlpha2(country),
        name: countryName
      })



      countryCallingCodes[country] = `+${countryCode}`;
    }

    countriesArray.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    this.items = countriesArray.filter((country: any) => country.name);

    console.log(this.items)

    return countryCallingCodes;
  };

  getCountryISOAlpha2(country: string): string {
    return country.toLowerCase();
  }

}
