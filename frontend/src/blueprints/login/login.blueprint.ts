import { Abbreviations } from "../base-layout/base-layout.blueprint";

export class LoginBlueprint {
    public static _loginPageBlueprint: any = {
        pageCode: Abbreviations.login,
        sectionCode: "LGN_CARD",
        sectionName: "card",
        sectionType: "container",
        sectionClassName: "login-container",
        metadata: {
            authMethod: 'popup' 
        },
        element: {
            LOGO: {
                sectionName: "logo",
                sectionType: "image",
                className: "product-logo",
                metaData: {},
                content: "ouem.jpg",
            },
            WLCM_TXT: {
                sectionName: "welcome-text",
                sectionType: "text",
                className: "font-black font semibold",
                metaData: {},
                content: "LLM Integrated Reports Platform"
            },
            LGN_BTN: {
                sectionName: "login_button",
                sectionType: "button",
                className: "login-btn font mt-4",
                content: "Login/Signup",
                metaData: {},
                action: "", // Keep action empty; it will be handled by the component
            }
        }
    };

    public static getLoginBlueprintData = () => {
        return this._loginPageBlueprint;
    }
}
