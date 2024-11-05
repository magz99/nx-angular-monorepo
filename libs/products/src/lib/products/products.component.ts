import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '@angular-monorepo/orders';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, OrdersComponent ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
