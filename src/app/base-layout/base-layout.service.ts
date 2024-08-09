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
   
      console.log("hfjdh")
      const topbarType: any = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthFour("appLayoutInfo", "baseLayoutElements", "topBarType", value);
      console.log("HII",topbarType)
      const footer: any = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthFour("appLayoutInfo", "baseLayoutElements", "footer", value);
    
    this.footerType.next(footer)
    this.topbarType.next(topbarType)

  }
}
