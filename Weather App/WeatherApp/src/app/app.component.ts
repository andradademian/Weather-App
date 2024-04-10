import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  cityName: string = 'Cluj';
  weatherData: any;
  form: FormGroup;

  


  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      cityName: ['']
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cityName: '',
    });
    this.weatherService.getWeatherData(this.cityName);
    this.getWeather();
    
  }

  onSubmit() {
    this.cityName = this.form.value.cityName;
  this.weatherService.getWeatherData(this.cityName).subscribe((data) => {
    this.weatherData = data;

  });

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
