import { Component, OnInit } from '@angular/core';
import { PhoneDetailsComponent } from '../templates/phone-details/phone-details.component';
import { HeaderComponent } from '../../static/header/header.component';
import { FooterComponent } from '../../static/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { StaticDataSvService } from '../../services/staticDataGetterSv/static-data-sv.service';
import { phoneDetails } from '../../Core/iphoneDetails';
import { IphoneProduct } from '../../Core/iphone-product';
import { ProcesadorComponent } from "../comparatorSections/procesador/procesador.component";
import { CamarasComponent } from "../comparatorSections/camaras/camaras.component";
import { PantallaComponent } from "../comparatorSections/pantalla/pantalla.component";
import { AlmacenamientoComponent } from "../comparatorSections/almacenamiento/almacenamiento.component";
import { OtrosComponent } from "../comparatorSections/otros/otros.component";
import { ImgComponent } from "../comparatorSections/imagen/img.component";

@Component({
  selector: 'app-comparator-component',
  standalone: true,
  imports: [PhoneDetailsComponent, HeaderComponent, FooterComponent, CommonModule, FormsModule, ProcesadorComponent, CamarasComponent, PantallaComponent, AlmacenamientoComponent, OtrosComponent, ImgComponent],
  templateUrl: './comparator-component.component.html',
  styleUrl: './comparator-component.component.css'
})
export class ComparatorComponentComponent{

  dataPhonesT:Array<IphoneProduct>; 
  arrPhonesToCompare:Array<IphoneProduct>=[];

  userModelOne:string;
  userModelTwo:string;
  userModelThree:string;

  varHasThreeSelectors:boolean = true;

  constructor(private data:StaticDataSvService){
    // this.dataPhonesT = this.data.getData();
    // this.dataPhonesT = this.data.getPhoneData();
    this.dataPhonesT = this.data.getPhoneAndImgData();

    if(this.fnIsScreenSmall()){

      this.arrPhonesToCompare=[this.dataPhonesT[0],this.dataPhonesT[1]];
      this.userModelOne=this.arrPhonesToCompare[0].modelo;
      this.userModelTwo=this.arrPhonesToCompare[1].modelo;
      this.userModelThree="";
      this.varHasThreeSelectors = false;
      return;

    };

    this.arrPhonesToCompare=[this.dataPhonesT[0],this.dataPhonesT[1],this.dataPhonesT[2]];


    this.userModelOne=this.arrPhonesToCompare[0].modelo;
    this.userModelTwo=this.arrPhonesToCompare[1].modelo;
    this.userModelThree=this.arrPhonesToCompare[2].modelo;
    
  }

  emptyPhoneDetails:IphoneProduct={
    "modelo": "",
    "procesador": {
      "tipo": "",
      "cantidad_nucleos": 0,
      "potencia": ""
    },
    "camara": {
      "trasera": {
        "resolucion": ""
      },
      "frontal": {
        "resolucion": ""
      }
    },
    "almacenamiento": [],
    "pantalla": {
      "medidas": ""
    },
    "otros": {
      "resistente_agua_polvo": "",
      "tipo_sim": [],
      "nfc": false,
      "pin_carga": "",
      "viene_con_cargador": false
    },
    "imagenes": []
  };

  fnIsScreenSmall(){

    return (window.innerWidth<=1024)?true:false;

  }

  fnPhoneSelector(inputNum:number,phoneModel:string){
    this.arrPhonesToCompare[inputNum]=this.searchInData(phoneModel)
  }

  searchInData(phoneModel:string):IphoneProduct{
    return this.dataPhonesT.filter(phone=>phone.modelo==phoneModel)[0];
  }

}

  // phoneModalOne:IphoneProduct=this.emptyPhoneDetails;
  // phoneModalTwo:IphoneProduct=this.emptyPhoneDetails;
  // phoneModalThree:IphoneProduct=this.emptyPhoneDetails;


  // test(optSection:number){
  //   if(optSection==0){
  //     this.phoneModalOne = this.searchInData(this.userModelOne);
  //   }
    
  //   else if(optSection==1){
  //      this.phoneModalTwo = this.searchInData(this.userModelTwo);
  //   }

  //    else if(optSection==2){
  //     this.phoneModalThree = this.searchInData(this.userModelThree);
  //   }
    
  // }
