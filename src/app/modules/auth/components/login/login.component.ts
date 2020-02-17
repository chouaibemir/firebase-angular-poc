import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/authentication.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alerts: AlertsService,
    private router: Router
  ) {}
  username: string;
  password: string;
  ngOnInit() {}
  doGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      if (res) {
        if (res.additionalUserInfo.profile.hd === 'esprit.tn') {
          this.alerts.setMessage('Logged in with success!', 'success');
          this.router.navigate(['/dashboard']);
        } else {
          this.alerts.setMessage(
            'Only Esprit accounts are authorized!',
            'error'
          );
        }
      } else {
        this.alerts.setMessage('Could not connect!', 'error');
      }
    });
  }
}
