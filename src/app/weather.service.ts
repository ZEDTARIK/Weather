import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '8a9a3fb7eec81dd6f72062891a949a65';
  baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(this.baseURL + city + '&appid=' + this.apiKey)
  }
}
