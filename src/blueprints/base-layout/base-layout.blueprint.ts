import { environment } from "../../environments/environment";
export enum Abbreviations {
    login = "LGN",
    baseLayout = "BL",
}

export class BaseLayoutBlueprint {
    private static _BaseLayoutBlueprint: any = {
        appId: "FW",
        appName: "Angular Framework",
        useHashforRouting: true,
        appPageCodeMap: {
            "login" : "LGN",
            "baseLayout": "BL",
        },

        appLayoutInfo: {
            pageStyleMetaData: {
                LGN: "login-background",
                BL: "landing-background",
            },
            gridAreaTemplate: {
                BL: {
                    layout: [["topbar"],
                ["contentbody"]],
                styleMetaData: {
                    gridTemplateColumns: "100%",
                    gridTemplateRows: "3.5625rem calc(100% - 3.5625rem)"
                }
                },
                LGN:{
                    layout : [
                    ["topbar"]
                    // ["contentbody"]
                    ],
                    styleMetaData: {
                        gridTemplateColumns: "100%",
                        // gridTemplateRows: "3.5625rem calc(100% - 3.5625rem)"
                        gridTempLateRows:"100%"
                    }
                },
            },
            baseLayoutElements: {
                topBarType: {
                    LGN: {
                        type: "type2",
                        textCssClass: "",
                        textContent : "",
                        
                        companyLogoPath: '../../../assets/logo/company-logo.png',
                       
                        logo1: '../../../assets/logo/logo-2.png',
                        logo2: '../../../assets/logo/logo-2.png'
                    },
                    BL: {
                        type: "type2",
                        textCssClass: "",
                        textContent : "",
                        companyLogoPath: '../../../assets/logo/company-logo.png',
                      
                        logo1: '../../../assets/logo/logo-2.png',
                        logo2: '../../../assets/logo/logo-2.png'
                    },
                }
            }
        }

    }
    public static getBaseLayoutBlueprintDataDepthOne = (primaryKey: string) =>{
        return this._BaseLayoutBlueprint[primaryKey];
   }
   public static getBaseLayoutBlueprintDataDepthTwo = (primaryKey: string, secondaryKey: string) =>{
       return this._BaseLayoutBlueprint[primaryKey][secondaryKey];
   }
   public static getBaseLayoutBlueprintDataDepthThree = (primaryKey: string, secondaryKey: string, tertiaryKey: string) =>{
       return this._BaseLayoutBlueprint[primaryKey][secondaryKey][tertiaryKey];
   }
   public static getBaseLayoutBlueprintDataDepthFour = (primaryKey: string, secondaryKey: string, tertiaryKey: string, fourthKey: string) =>{
       return this._BaseLayoutBlueprint[primaryKey][secondaryKey][tertiaryKey][fourthKey];
   }
   public static getUserUniqueURI = (retailerCode: string, hierachyCode: string, profileCode: string) => {
       return this._BaseLayoutBlueprint["apiHelper"][retailerCode][hierachyCode][profileCode];
   }
}


