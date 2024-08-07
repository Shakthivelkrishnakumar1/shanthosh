import { Component, Input, OnInit } from '@angular/core';
import { commonBlueprint } from '../../../blueprints/common/common.blueprint';
import { BaseLayoutService } from '../base-layout.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  regionName : string = commonBlueprint.regionName; 
  helloText = commonBlueprint.helloText;
  topbarMetadata: any = {
    type:'type0'
  };
 

  ngOnInit(): void {
    // this.BaseLayoutService.topbarType.subscribe((data) => {
    //   this.topbarMetadata = data;
    //   // this.getProfile();
    //   // this.getProfilePic();

    // })
  }


}
