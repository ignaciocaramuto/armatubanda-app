import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {}

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })

}
}