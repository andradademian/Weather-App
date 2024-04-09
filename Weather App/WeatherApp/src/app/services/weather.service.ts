import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    const params = new HttpParams()
      .set('location', cityName) 
      .set('unitGroup', 'metric')
      .set('key', 'W5P6D6PVMCL2NDELDVCT4BCCX')
      .set('contentType', 'json');

    return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/', { params }).pipe(
      map((response: any) => {
        const days = response.days[0];

        return {
          temperature: days.temp,
          minTemperature: days.tempmin,
          maxTemperature: days.tempmax,
          humidity: days.humidity,
          windSpeed: days.windspeed
        };
      })
    );
  }
}
