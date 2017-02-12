import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { AnythingComponent } from './';

export const anythingRoute: Route = {
  path: 'anything',
  component: AnythingComponent,
  data: {
    authorities: [],
    pageTitle: 'anything.title'
  },
  canActivate: [UserRouteAccessService]
};
