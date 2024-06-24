import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apikey = '';

  constructor(private hhtp: HttpClient) { }

  //metodo
  getWeatherDatas(cityName: string): Observable<any> {
    return this.hhtp.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`, {})
  }
}
