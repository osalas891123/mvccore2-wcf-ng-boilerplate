﻿import { Routes } from '@angular/router';
import * as Pages from '../pages/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Pages.PageDashboard,
    data: {
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }
  },
  {
    path: 'designer',
    component: Pages.PageDesigner,
    data: {
      title: 'Designer'
    }
  },
  {
    path: 'viewer',
    component: Pages.PageViewer,
    data: {
      title: 'Viewer'
    }
  },
  {
    path: 'options',
    component: Pages.PageOptions,
    data: {
      title: 'Options'
    }
  },
  {
    path: 'datamanager',
    component: Pages.PageDatamanager,
    data: {
      title: 'Data Manager'
    }
  }
];

export default routes;