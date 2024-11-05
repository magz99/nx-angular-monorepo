import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '@angular-monorepo/products';
import { UiComponent } from '@angular-monorepo/ui';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [RouterModule, ProductsComponent, UiComponent, NxWelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
