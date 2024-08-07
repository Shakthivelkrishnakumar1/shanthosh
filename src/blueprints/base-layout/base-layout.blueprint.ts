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
                    ["topbar"],
                    ["contentbody"]],
                    styleMetaData: {
                        gridTemplateColumns: "100%",
                        gridTemplateRows: "3.5625rem calc(100% - 3.5625rem)"
                    }
                },
            },
            baseLayoutElements: {
                topbarType: {
                    LGN: {
                        type: "type1",
                        textCssClass: "",
                        textContent : "",
                        retailerLogoPath: '../../../assets/logo/logo-2.png',
                        companyLogoPath: '../../../assets/logo/company-logo.png',
                        productLogoPath: '../../../assets/logo/logo-2.png'
                        CompanyLogoPath: '../../../assets/logo/company-logo.png',
                        logo1: '../../../assets/logo/logo-2.png',
                        logo2: '../../../assets/logo/logo-2.png'
                    },
                    BL: {
                        type: "type2",
                        textCssClass: "",
                        textContent : "",
                        retailerLogoPath: '../../../assets/logo/logo-2.png',
                        companyLogoPath: '../../../assets/logo/company-logo.png',
                        productLogoPath: '../../../assets/logo/logo-2.png'
                        CompanyLogoPath: '../../../assets/logo/company-logo.png',
                        logo1: '../../../assets/logo/logo-2.png',
                        logo2: '../../../assets/logo/logo-2.png'
                    },
                }
            }
        }

    }
}

