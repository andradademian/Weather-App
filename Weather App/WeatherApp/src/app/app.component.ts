import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  cityName: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeatherData(this.cityName)
      .subscribe((data) => {
        this.weatherData = data;
      });
  }

  getTemperature(): number {
    return this.weatherData?.temp;
  }

  getTempMax(): number {
    return this.weatherData?.tempmax;
  }

  getTempMin(): number {
    return this.weatherData?.tempmin;
  }
  
  getHumidity(): number {
    return this.weatherData?.humidity;
  }

  getWind(): number {
    return this.weatherData?.windspeed;
  }
}
