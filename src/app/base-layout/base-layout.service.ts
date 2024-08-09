import { Injectable } from '@angular/core';
import { BaseLayoutBlueprint } from '../../blueprints/base-layout/base-layout.blueprint';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class BaseLayoutService {
  private isLoaded = new BehaviorSubject<any>(false);
  public switchingProfile = new BehaviorSubject<any>(false);
  public profileDetails: any;
  isLoaded$ = this.isLoaded.asObservable();
  public isAdmin: boolean = false;
  private pageBackground = new BehaviorSubject<any>({});
  pageBackground$ = this.pageBackground.asObservable();
  public userRetailerAccess = new BehaviorSubject<any>('');
  public screenShotMode: boolean = false;
  public userRolesList: any = [];
  public userRoleListForAdmin: any = [];
  public sidenavExpanded: boolean = false;
  public topbarType = new BehaviorSubject<any>({ type: "type1", metadata: {} });
  public footerType = new BehaviorSubject<any>({ type: "type1", metadata: {} });
  public userURI = '';
  public retailerCode = '';
  public adminRoles = [];
  public userReportAccessList: any = [];
  public accessStortedSideNavData: any = new BehaviorSubject<any>([]);


  constructor( 
    // private router : Router,
    // private store: Store,
    // private http: HttpClient,
   
    
  ) { }
  
  
setPageLevelMetadata = (value: any) => {
   
    const pageLayout = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthThree("appLayoutInfo", "gridAreaTemplate", value);
    this.constructorGridAreaTemplateFromMetaData(pageLayout);
    

    const topbarType: any = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthFour("appLayoutInfo", "baseLayoutElements", "topBarType", value);
    console.log("HII",topbarType)
    const footer: any = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthFour("appLayoutInfo", "baseLayoutElements", "footer", value);
    
    this.footerType.next(footer)
   this.topbarType.next(topbarType)

  }


  constructorGridAreaTemplateFromMetaData = (data: any) => {

    let metadata = data.layout;
    this.documentStyleVariablesIntialiser();
    const elementsToCheck = ["sidebar", "topbar", "contentbody","footer"];
    let cssGridTemplate = '';
    for (let row = 0; row < metadata.length; row++) {
      cssGridTemplate += "'";
      for (let col = 0; col < metadata[row].length; col++) {
        const element = metadata[row][col];
        if (element) {
          cssGridTemplate += `${element} `;
        }
      }
      cssGridTemplate = cssGridTemplate.trim();
      if (cssGridTemplate) {
        cssGridTemplate += "'\n";
      }
    }

    const missingElements = elementsToCheck.filter(element => {
      return !metadata.flat().includes(element);
    });
console.log("sjdnsjdnsjds",data.styleMetaData.gridTemplateRows);
    document.documentElement.style.setProperty('--mainLayout-template', cssGridTemplate);
    document.documentElement.style.setProperty('--mainLayout-rows', data.styleMetaData.gridTemplateRows);
    document.documentElement.style.setProperty('--mainLayout-columns', (this.sidenavExpanded && !(missingElements.includes("sidebar"))) ? "24.9375rem calc(100% - 24.9375rem)" : (data.styleMetaData.gridTemplateColumns));

    missingElements.forEach((data) => {
      if (data == "sidebar") {

        document.documentElement.style.setProperty('--helix-sidebar-display', 'none');
      }
      else if (data == "topbar") {

        document.documentElement.style.setProperty('--topbar-display', 'none');
      }
      else if (data == "footer") {

        document.documentElement.style.setProperty('--footer-display', 'none');
      }
      else if (data == "contentbody") {

        document.documentElement.style.setProperty('--helix-contentbody-display', 'none');
      }
    })



  }
  documentStyleVariablesIntialiser = () => {
    document.documentElement.style.setProperty('--topbar-display', 'block');
    document.documentElement.style.setProperty('--footer-display', 'block');
    document.documentElement.style.setProperty('--mainLayout-template', '');
    document.documentElement.style.setProperty('--mainLayout-rows', '100%');
    document.documentElement.style.setProperty('--mainLayout-columns', '100%');
    document.documentElement.style.setProperty('--helix-sidebar-display', 'block');
    document.documentElement.style.setProperty('--helix-contentbody-display', 'block');
  

  }

}
