import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgIf, RouterOutlet, RouterModule],
})
export class AppComponent {}
