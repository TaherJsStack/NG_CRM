import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { UserActions } from '../actions';
import { IUserModel } from '../../core/models';

export interface State extends EntityState<IUserModel> {
  selectedUserId: number | string | any | undefined;
  pageNo: number | string | any | undefined;
  pageSize: number | string | any | undefined;
  totalItems: number | string | any | undefined;
}

export const adapter: EntityAdapter<IUserModel> = createEntityAdapter<IUserModel>(
  {
    selectId: (x) => x.Id,
    sortComparer: false,
  }
);

const initialState: State = adapter.getInitialState({
  selectedUserId: undefined,
  pageNo: undefined,
  pageSize: undefined,
  totalItems: undefined,
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.fetchUsersListSuccess, (state, { response }) => {
    return adapter.setAll(response, state);
  }),
 
  on(UserActions.fetchUsersListPagination, (state, {pageNo, pageSize }) => {
    return {
      ...state,
      pageNo, 
      pageSize
    };
  }),
  on(UserActions.selectUser, (state, { userId }) => {
    return {
      ...state,
      selectedUserId: userId,
    };
  }),
  on(UserActions.addNewUser, (state, { NewIUserModelData }) => {
    return adapter.addOne(NewIUserModelData, state);
  }),
  on(UserActions.updateUser, (state, { updateIUserModelData }) => {
    return adapter.updateOne(
      { id: updateIUserModelData.Id, changes: updateIUserModelData },
      state
    );
  }),
  on(UserActions.deleteUser, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(UserActions.clearUserList, (state) => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  })
);

export const selectedId       = (state: State) => state.selectedUserId;
export const selectedIdPag    = (state: State) => state.entities;
export const selectedPageNo   = (state: State) => state.pageNo;
export const selectedPageSize = (state: State) => state.pageSize;

