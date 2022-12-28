import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private router: Router) { }

  displayAdmin: string = 'relative';
  displayAdminText: string = 'admin';
  numOfUserNotifications: number = 1;

  goToHome(): void{
    this.router.navigate(['/home']);

  }
  goToNewTicket(): void{
    this.router.navigate(['/newTicket']);
  }
  goToMetrics(): void{
    this.router.navigate(['/metrics']);
  }


  ngOnInit(): void {
  }

}
