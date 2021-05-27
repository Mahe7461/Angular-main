import { createAction, props } from '@ngrx/store';
import {LoginRequestPayload} from 'src/app/login';
export const loginva = createAction(
    '[AUTH API]  Login user...',
    props<{ payload: LoginRequestPayload }>()
  );
  