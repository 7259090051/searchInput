import { Component } from '@angular/core';
import { AuthenticationService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersData: any;
  presentPage: number = 1;
  constructor(private authenticationService: AuthenticationService) {
  }

  //inside ngOnInit we will get  getUsers data 
  ngOnInit() {
    this.authenticationService.getUsers().subscribe((data) => {
      this.usersData = data;
    })
  }

  //inside searchUser function we will get searchUsers or getusers data based on input search value
  searchUser(event: any) {
    if(event.target.value) {
      this.authenticationService.searchUsers(event.target.value).subscribe((data: any) => {
        this.usersData = data.items;
      })
    } else {
      this.ngOnInit();
    }
  }
}
