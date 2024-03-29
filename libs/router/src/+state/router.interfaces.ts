import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params
} from "@angular/router";
import { RouterStateSerializer, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}


export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
  >('router');
