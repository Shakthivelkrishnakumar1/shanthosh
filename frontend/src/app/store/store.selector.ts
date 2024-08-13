import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getHierarchyCodeState = createFeatureSelector<any>('hierarchy');

export const getHierarchyCode = createSelector(
  getHierarchyCodeState,
  (state) => {
    return state['hierarchyMetaData']   
}
);

export const getUserAccessState = createFeatureSelector<any>('userMetaData');

export const getUserAccessData = createSelector(
    getUserAccessState,
  (state) => {
    return state['userAccess']   
}
);

export const getRetailerCodeState = createFeatureSelector<any>('retailerCodeData');

export const getRetailerCode = createSelector(
    getRetailerCodeState,
  (state) => {
    return state['retailerCode']   
}
);

export const getReportDataState = createFeatureSelector<any>('reportDetails');

export const getReportMetadata = createSelector(
    getReportDataState,
  (state) => {
    return state['reportMetadata']   
}
);

export const getcurrentPageCodeState = createFeatureSelector<any>('currentPageCode');

export const getcurrentPageCode = createSelector(
  getcurrentPageCodeState,
  (state) => {
    return state['currentPageCode']   
}
);