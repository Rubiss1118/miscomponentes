// app.routes.ts
import { Routes } from '@angular/router';
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
import { SLIDER } from "./slider/slider";
import { Menu } from "./menu/menu";
import { Tree } from "./tree/tree";
import { Chips } from "./chips/chips";
import { Sheet } from "./sheet/sheet";

export const routes: Routes = [
  { path: 'sheet', component: Sheet },
  { path: 'chips', component: Chips },
  { path: 'cards', component: Cardse },
  { path: 'autocomplete', component: MatAutocomplete },
  { path: 'button', component: ButtonOverviewExample },
  { path: 'toolbar', component: ToolBar },
  { path: 'tabla', component: Tabla },
  { path: 'check', component: Check },
  { path: 'progress', component: Progress },
  { path: 'divider', component: Divider },
  { path: 'panel', component: Panel },
  { path: 'calendario', component: Calendario },
  { path: 'slider', component: SLIDER },
  { path: 'menu', component: Menu },
  { path: 'tree', component: Tree },
  { path: '', redirectTo: '/sheet', pathMatch: 'full' }
];