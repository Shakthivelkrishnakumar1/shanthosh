import { localStorageSync} from 'ngrx-store-localStorage';
import { ActionReducer } from '@ngrx/store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
      keys: ['hierarchy'],
      rehydrate: true,
    })(reducer);
  }