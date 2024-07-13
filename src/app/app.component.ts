import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // TODO -< CommonModule - ніколи ніде не імпортуй, для різних потреб уже давно існують окремі сутності такі як: NgIf, NgFor, та інші, ніколи нема потреби імпортувати весь CommonModule
  // TODO -< common-ui - це уже устарілий спосіб розбивати окрему ui, якщо є глобальні компоненти то для них створюй папку: "components", а якщо є компоненти які потрібні на різних сторінках то створюй папку "shared"
  // TODO -< layout сторювати без потребм не потрібно, це тільки дял великих проектів, де є розбиття на клієнться і адмінську частину, іто тепер всі використовують для такого mono репозиторії, до речі почитай що це таке: https://nx.dev/ Ти будеш з таким працювати потім
  imports: [NgIf, RouterOutlet, ProfileCardComponent],
})
export class AppComponent {}
