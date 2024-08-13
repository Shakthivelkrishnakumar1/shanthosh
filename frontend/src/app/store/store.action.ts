import { createAction, props } from "@ngrx/store";

export const updateHeirachyMetaData = createAction('[HeirachyCode] Set HeirachyCode', props<{code : any}>());
export const clearHeirachyMetaData  = createAction('[HeirachyCode] Clear HeirachyCode');

export const updateuserAccess = createAction('[UserAccess] Set User Access', props<{accessData : any}>());
export const clearuserAccess  = createAction('[UserAccess] Clear User Access');

export const updateRetailerCode = createAction('[Retailer Code] Set Retailer Code', props<{retailerCodeValue : any}>());
export const clearRetailerCode = createAction('[Retailer Code] Clear Retailer Code');

export const updateReportMetadata = createAction('[Report Metadata] Set Report Metadata', props<{reportData : any}>());
export const clearReportMetadata = createAction('[Report Metadata] Clear Report Metadata');

export const updatecurrentPageCodedata = createAction('[currentPageCode Metadata] Set currentPageCode', props<{currentPageCodeData : any}>());
export const clearcurrentPageCodedata = createAction('[currentPageCode Metadata] Clear currentPageCode');