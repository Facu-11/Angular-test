import { Component, OnInit } from '@angular/core';
import { PhoneDetailsComponent } from '../templates/phone-details/phone-details.component';
import { HeaderComponent } from '../../static/header/header.component';
import { FooterComponent } from '../../static/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';

@Component({
  selector: 'app-comparator-component',
  standalone: true,
  imports: [PhoneDetailsComponent,HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './comparator-component.component.html',
  styleUrl: './comparator-component.component.css'
})
export class ComparatorComponentComponent{

  dataPhonesT:Array<phoneDetails>; 

  constructor(private data:StaticDataSvService){
    this.dataPhonesT = this.data.getData();
  }

  emptyPhoneDetails:phoneDetails={
    family:0,
    model: '',
    camera: '',
    storage: '',
    battery: '',
    display: '',
    colors: [],
    price: ''
  };

  userModelOne:string="";
  userModelTwo:string="";
  userModelThree:string="";


  phoneModalOne:phoneDetails=this.emptyPhoneDetails;
  phoneModalTwo:phoneDetails=this.emptyPhoneDetails;
  phoneModalThree:phoneDetails=this.emptyPhoneDetails;


  test(optSection:number){
    if(optSection==0){
      this.phoneModalOne = this.searchInData(this.userModelOne);
    }
    
    else if(optSection==1){
       this.phoneModalTwo = this.searchInData(this.userModelTwo);
    }

     else if(optSection==2){
      this.phoneModalThree = this.searchInData(this.userModelThree);
    }
    
      
  }

  searchInData(phoneModel:string):phoneDetails{

    return this.dataPhonesT.filter(phone=>phone.model==phoneModel)[0];

  }

}
