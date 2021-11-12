import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  viewWeb: any[] = [ 
    {reportingNumber: 'A1215', city: 'PieterMaritzburg', scheduleddprtTime: '20:00', estimateddprtTime: '20:10', actualdeprtTime: '20:15'},
    {reportingNumber: 'A1318', city: 'Johannesburg', scheduleddprtTime: '10:00', estimateddprtTime: '10:10', actualdeprtTime: '10:15'},
    {reportingNumber: 'C1720', city: 'Pretoria', scheduleddprtTime: '11:00', estimateddprtTime: '11:10', actualdeprtTime: '11:15'},
    {reportingNumber: 'B1810', city: 'Durban',scheduleddprtTime: '14:00', estimateddprtTime: '15:00', actualdeprtTime: '15:15'},
    {reportingNumber: 'B1190', city: 'Cape Town',scheduleddprtTime: '14:00', estimateddprtTime: '14:00', actualdeprtTime: '14:05'},
    {reportingNumber: 'A1990', city: 'George Town',scheduleddprtTime: '09:00', estimateddprtTime: '09:05', actualdeprtTime: '09:10'},
    {reportingNumber: 'A1440', city: 'Rustenberg',scheduleddprtTime: '08:00', estimateddprtTime: '08:05', actualdeprtTime: '08:05'},
    {reportingNumber: 'C1410', city: 'Limpopo', scheduleddprtTime: '15:00', estimateddprtTime: '15:05', actualdeprtTime: '15:00'},
    {reportingNumber: 'B0410', city: 'West Rand',scheduleddprtTime: '15:00', estimateddprtTime: '15:05', actualdeprtTime: '15:00'}
  ];

  ngOnInit(): void {
  }

}
