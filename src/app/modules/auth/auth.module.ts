import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '../../services/authentication.service';
import { AlertsModule } from 'angular-alert-module';
import { CustomMaterialModule } from '../../core/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AlertsModule.forRoot(),
    CustomMaterialModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
