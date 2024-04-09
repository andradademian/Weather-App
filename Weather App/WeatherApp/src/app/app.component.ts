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
  cityName: string = 'Dubai';
  weatherData: any;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    
  }

  getWeather(): void {
    this.weatherService.getWeatherData(this.cityName)
      .subscribe((data) => {
        this.weatherData = data;
        this.getTemperature();
        this.getTempMax();
        this.getTempMin();
        this.getWind();
        this.getHumidity();
        this.getCityName();
      });
  }

  getTemperature(): number {
    return this.weatherData?.temperature;
  }

  getTempMax(): number {
    return this.weatherData?.maxTemperature;
  }

  getTempMin(): number {
    return this.weatherData?.minTemperature;
  }
  
  getHumidity(): number {
    return this.weatherData?.humidity;
  }

  getWind(): number {
    return this.weatherData?.windSpeed;
  }

  getCityName(): string {
    return this.cityName;
  }

  
}
