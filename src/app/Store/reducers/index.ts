import * as fromAPI from './api.reducers';
import * as fromUser from './user.reducer';

import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { adapter } from './user.reducer';

export interface UsersState {
  users: fromUser.State;
  api: fromAPI.State;
}

export function UsersReducers(state: UsersState, action: Action): any {
  return combineReducers({
    users: fromUser.userReducer,
    api: fromAPI.apiReducer,
  })(state, action);
}

const featureSelector = createFeatureSelector<UsersState>('users');

const userSelector = createSelector(featureSelector, (x) => x.users);

const apiSelector = createSelector(featureSelector, (x) => x.api);

const { selectAll, selectEntities, selectIds, selectTotal,  } = adapter.getSelectors(userSelector);

export const userEntities       = selectAll;
export const selectUserEntities = selectEntities;
export const userSelectEntities = selectEntities;
export const userselectTotal    = selectTotal;

const getSelectedId    = createSelector(userSelector, fromUser.selectedId);
const selectedPageNo   = createSelector(userSelector, fromUser.selectedPageNo);
const selectedPageSize = createSelector(userSelector, fromUser.selectedPageSize);

export const getSelectedUserIdEntity = createSelector(
  userEntities,
  getSelectedId,
  (entities, id) => {
    return id && entities[id - 1];
  }
);

export const fetchUsersListPaginationSuccess = createSelector(
  userEntities,
  selectUserEntities,
  userselectTotal,
  selectedPageNo,
  selectedPageSize,
  userSelector,
    (userEntities, entities, totalItems, selectedPageNo, selectedPageSize) => {
      const startIndex = (selectedPageNo - 1) * selectedPageSize;
      const endIndex = startIndex + selectedPageSize;
      let data = userEntities.slice(startIndex, endIndex);
      return {entities, totalItems, selectedPageNo,selectedPageSize, data}
    }
);

export const getApiLoading = createSelector(apiSelector, fromAPI.isLoading);

export const getApiError = createSelector(apiSelector, fromAPI.error);


