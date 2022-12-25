import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  displayAdmin: string = 'relative';
  displayAdminText: string = 'admin';
  numOfUserNotifications: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
