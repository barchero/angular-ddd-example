import * as fromReducer from './calendar.reducer'

import {createFeatureSelector} from '@ngrx/store';


export const getCalendarState = createFeatureSelector<fromReducer.CalendarState>('calendar')



