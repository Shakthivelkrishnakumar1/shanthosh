import { Component } from '@angular/core';
import { BaseLayoutService } from '../base-layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerData:any={};

  className="";

  constructor(private baselayoutService: BaseLayoutService) {

  }
  
 
   ngOnInit(): void {
     this.baselayoutService.footerType.subscribe((data) => {
       console.log("I am footer",data);
       
       this.footerData = data;
       this.assignClass();
       

 
     })
   }

   assignClass()
   {
    if(this.footerData.type=="type0")
    {
      this.className="p-3 type0"+" "+this.footerData.mode+" "+this.footerData.position;
    }
    else{
      this.className=this.footerData.position+" "+this.footerData.mode;
    }
    console.log("CLassname:",this.className)
   }
   
}
