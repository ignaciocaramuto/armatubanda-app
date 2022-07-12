import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => { console.log(response);
                          this.loggedIn = true; },
      error: error => console.log(error)
    })
}
}
