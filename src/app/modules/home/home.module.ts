import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { AlertsModule } from 'angular-alert-module';
import { AuthService } from '../../services/authentication.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HomeRoutingModule, AlertsModule.forRoot()],
  providers: [AuthService]
})
export class HomeModule {}
