import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;

    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])) // Si hay un error, retornar un array vacío
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.url}/name/${term}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
