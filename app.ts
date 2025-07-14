import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete/mat-autocomplete';
import { Cardse } from "./cards/cardse/cardse";
import { ButtonOverviewExample } from "./ButtonOverviewExample/button-overview-example/button-overview-example";
import { ToolBar } from "./Toolbar/tool-bar/tool-bar";
import { Tabla } from "./Tabla/tabla/tabla";
import { Check } from "./Check/check/check";
import { Progress } from "./progress/progress";
import { Divider } from "./divider/divider";
import { Panel } from "./panel/panel";
import { Calendario } from "./calendario/calendario";
import { MatNativeDateModule } from '@angular/material/core';
import { SLIDER } from "./slider/slider";
import { Menu } from "./menu/menu";
import { Tree } from "./tree/tree";
import { Chips } from "./chips/chips";
import { Sheet } from "./sheet/sheet";

// Importaciones de Angular Material que te faltan
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    RouterOutlet, 
    MatAutocomplete, 
    Cardse, 
    ButtonOverviewExample, 
    ToolBar, 
    Tabla, 
    Check, 
    Progress, 
    Divider, 
    Panel, 
    Calendario, 
    SLIDER, 
    Menu, 
    Tree, 
    Chips, 
    Sheet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular2';
}