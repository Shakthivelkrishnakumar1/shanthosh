import { Injectable } from '@angular/core';
import { BaseLayoutBlueprint } from '../../blueprints/base-layout/base-layout.blueprint';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})


export class BaseLayoutService {
  public isUserLoggedIn: boolean = false;
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
  public userURI = '';
  public retailerCode = '';
  public adminRoles = [];
  public userReportAccessList: any = [];
  public accessStortedSideNavData: any = new BehaviorSubject<any>([]);


  constructor( 
    // private router : Router,
    // private store: Store,
    // private http: HttpClient,
    private msalService: MsalService
   
    
  ) {
    this.isUserLoggedIn = !!this.msalService.instance.getActiveAccount();
   }
  
  
  setPageLevelMetadata = (value: any) => {
   
    const topbarType: any = BaseLayoutBlueprint.getBaseLayoutBlueprintDataDepthFour("appLayoutInfo", "baseLayoutElements", "topBarType", value);
  
   this.topbarType.next(topbarType)

  }

  setLoaded = (value: boolean) => {
    this.isLoaded.next(value);
  } 
}