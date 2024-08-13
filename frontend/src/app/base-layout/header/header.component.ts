import { Component, Input, OnInit } from '@angular/core';
import { commonBlueprint } from '../../../blueprints/common/common.blueprint';

import { CommonModule } from '@angular/common';
import { BaseLayoutService } from '../base-layout.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  regionName : string = commonBlueprint.regionName; 
  helloText = commonBlueprint.helloText;
  topbarMetadata: any = {};


 constructor(private baselayoutService: BaseLayoutService) {

 }
 

  ngOnInit(): void {
    this.baselayoutService.topbarType.subscribe((data: any) => {
      // console.log("hi",data);
      this.topbarMetadata = data;

    })
  }


}