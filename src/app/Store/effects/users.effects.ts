import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserActions } from '../actions';
import { IUserModel } from '../../core/models';
import { UsersService } from '../../core/services';
import { UsersState, userEntities } from '../reducers';

@Injectable()
export class UsersEffects {
  constructor(
    private usersService: UsersService,
    private action$: Actions,
    private store: Store<UsersState>
  ) {}

  fetchUserList$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(UserActions.fetchUsersListStart),
        withLatestFrom(this.store.select(userEntities)),

        exhaustMap(([action, data]) => {

          return this.usersService.getList()
          .pipe(
            map((userList: IUserModel[]) => {
              let response = userList.map((item, index) => {
                return {
                  ...item,
                  Id:             `Adkgjas${index}`,
                  name:          `name ${index}`,
                  email:         `email@email${index}.com`,
                  password:      'string',
                  role:          1,
                  permeation:    [1],
                  phone:         Number('01155721425'),
                  activeState:   true,
                  governorate:   `governorate ${index}`,
                  city:          `city ${index}`,
                  area:          `area ${index}`,
                  floorNo:       `floorNo ${index}`,
                  streetNo:      `streetNo ${index}`,
                  buildingNo:    `buildingNo ${index}`,
                  apartmentNo:   `apartmentNo ${index}`,
                  createdAt:     `${Date.now()}`,
                  updatedAt:     `${Date.now()}`,
                }
              });
              return UserActions.fetchUsersListSuccess({ response });
            }),

            catchError((error) => {
              return of(UserActions.fetchUsersListError({ error }));
            })
          );
        })
      ),
    { dispatch: true }
  );

}
