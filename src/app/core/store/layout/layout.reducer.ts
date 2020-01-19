import {LayoutActions} from './layout.actions';

export interface LayoutState {

}

export const initialLayoutState: LayoutState = {

};

export function layoutReducer(state = initialLayoutState, action: LayoutActions): LayoutState {
  switch (action.type) {

    default:
      return state;
  }
}
