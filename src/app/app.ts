import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatChipsModule, MatButtonModule, MatMenuModule],
  template: `
    <h1>Hello, {{ title() }}</h1>

    <button matButton [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>

    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

    <mat-chip-set aria-label="Fish selection">
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip>Three fish</mat-chip>
      <mat-chip disabled>Four fish</mat-chip>
      <mat-chip>Three fish</mat-chip>
    </mat-chip-set>

    <router-outlet/>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('verbandsbuch-ui');
}
