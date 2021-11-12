import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {
  
  departureTimes: any[] = [ 
    {reportingNumber: 'A1215', city: 'PieterMaritzburg'},
    {reportingNumber: 'A1318', city: 'Johannesburg'},
    {reportingNumber: 'C1720', city: 'Pretoria'},
    {reportingNumber: 'B1810', city: 'Durban'},
    {reportingNumber: 'B1190', city: 'Cape Town'},
    {reportingNumber: 'A1990', city: 'George Town'},
    {reportingNumber: 'A1440', city: 'Rustenberg'},
    {reportingNumber: 'C1410', city: 'Limpopo'},
    {reportingNumber: 'B0410', city: 'West Rand'}
  ];

  trainStatus: any[] = [

    {onTime: 'On Time', departed: 'Departed', cancelled: 'Cancelled', delayed:'Delayed'}

  ];

  ngOnInit(): void {

   
  }

}
