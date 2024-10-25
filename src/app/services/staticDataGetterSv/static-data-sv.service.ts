import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

// import data from '../../Data/iphonesInfo.json';
import data from '../../Data/iphonesCat.json';
import { phoneDetails } from '../../Core/iphoneDetails';
import phoneProduct from '../../Data/iphoneProduct.json'
import { IphoneProduct } from '../../Core/iphone-product';

@Injectable({
  providedIn: 'root',
  
})
export class StaticDataSvService {

  constructor(private http:HttpClient) { }

  // staticJsonInfo = "src/app/Data/iphonesInfo.json";
  // staticJsonInfo = "../../Data/iphonesInfo.json";
  //staticJsonInfo = "../../Data/iphonesCat.json";

  // getData():Observable<Array<phoneDetails>>{
  //   return this.http.get(this.staticJsonInfo);
  // }
  
  getData():Array<phoneDetails>{
    
    return data;

  }

  getPhoneData():Array<IphoneProduct>{
    return phoneProduct;
  }

}
