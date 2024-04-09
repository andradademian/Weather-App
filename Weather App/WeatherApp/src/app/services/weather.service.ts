import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?unitGroup=metric&key=W5P6D6PVMCL2NDELDVCT4BCCX&contentType=json').pipe(
      map((response: any) => {
        return {
          temperature: response.currentConditions.temp,
          minTemperature: response.days[0].tempmin,
          maxTemperature: response.days[0].tempmax,
          humidity: response.days.humidity,
          windSpeed: response.days.windspeed,
        };
      })
    );
  }
}
