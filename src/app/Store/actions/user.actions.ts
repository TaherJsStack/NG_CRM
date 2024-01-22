import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IUserModel } from '../../core/models';

export const fetchUsersListStart = createAction('[Users/fetchUsersListStart]');

export const fetchUsersListPagination = createAction(
  '[Users/fetchUsersListPagination]',
  props<{pageNo: number, pageSize: number}>()
);

export const fetchUsersListPaginationSuccess = createAction(
  '[Users/fetchUsersListPaginationSuccess]',
  props<{response: IUserModel[], itemsTotal: number }>()
);

export const fetchUsersListSuccess = createAction(
  '[Users/fetchUsersListSuccess]',
  props<{ response: IUserModel[] }>()
);

export const fetchUsersListError = createAction(
  '[Users/fetchUsersListError]',
  props<{ error: HttpErrorResponse }>()
);

export const selectUser = createAction(
  '[Users/selectUser]',
  props<{ userId: number }>()
);

export const addNewUser = createAction(
  '[Users/addNewUser]',
  props<{ NewIUserModelData: IUserModel }>()
);

export const updateUser = createAction(
  '[Users/updateUser]',
  props<{ updateIUserModelData: IUserModel }>()
);

export const deleteUser = createAction(
  '[Users/deleteUser]',
  props<{ id: number }>()
);

export const clearUserList = createAction('[Users/ClearUserList]');
