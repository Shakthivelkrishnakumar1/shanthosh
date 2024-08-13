import { createReducer, on } from '@ngrx/store';
import {clearHeirachyMetaData, clearuserAccess, updateHeirachyMetaData, updateuserAccess, updateRetailerCode, clearRetailerCode, updateReportMetadata, clearReportMetadata, updatecurrentPageCodedata, clearcurrentPageCodedata } from './store.action';
import {initialHierarchyMetaDataState, initialuserAccessState, initialRetailerCodeState, initialReportMetadataState, initialcurrentPageCodeState } from './store.interface';

  
export const hierarchyReducer = createReducer(
  initialHierarchyMetaDataState,
  on(updateHeirachyMetaData, (state, { code }) => ({ ...state, hierarchyMetaData : code })),
  on(clearHeirachyMetaData, state => ({ ...state, hierarchyCode : null }))
);

export const userAccessReducer = createReducer(
  initialuserAccessState,
  on(updateuserAccess, (state, { accessData }) => ({ ...state, userAccess : accessData })),
  on(clearuserAccess, state => ({ ...state, userAccess : null }))
);


export const retailerCodeReducer = createReducer(
  initialRetailerCodeState,
  on(updateRetailerCode, (state, { retailerCodeValue }) => ({ ...state, retailerCode : retailerCodeValue })),
  on(clearRetailerCode, state => ({ ...state, retailerCode : null }))
);

export const reportMetadataReducer = createReducer(
  initialReportMetadataState,
  on(updateReportMetadata, (state, { reportData }) => ({ ...state, reportMetadata : reportData })),
  on(clearReportMetadata, state => ({ ...state, reportMetadata : null }))
);


export const currentPageReducer = createReducer(
  initialcurrentPageCodeState,
  on(updatecurrentPageCodedata, (state, { currentPageCodeData }) => ({ ...state, currentPageCode : currentPageCodeData })),
  on(clearcurrentPageCodedata, state => ({ ...state, currentPageCode : null }))
);