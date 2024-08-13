export interface HierarchyMetaDataState {
    hierarchyMetaData: string | null;
}
  
export const initialHierarchyMetaDataState: HierarchyMetaDataState = {
    hierarchyMetaData: null
};
    

export interface userAccessState {
    userAccess: any | null;
}
  
export const initialuserAccessState: userAccessState = {
    userAccess: null
};

export interface RetailerCodeState {
    retailerCode: string | null;
}
  
export const initialRetailerCodeState: RetailerCodeState = {
    retailerCode: null
};

export interface ReportState {
    reportMetadata: string | null;
}
  
export const initialReportMetadataState: ReportState = {
    reportMetadata: null
};

export interface CurrentPage {
    currentPageCode : string | null;
}
  
export const initialcurrentPageCodeState: CurrentPage = {
    currentPageCode: "SIDENAV_HOME"
};