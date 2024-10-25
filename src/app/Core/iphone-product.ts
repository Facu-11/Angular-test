export interface IphoneProduct {

    modelo: string;
    procesador: {
      tipo: string;
      cantidad_nucleos: number;
      potencia: string;
    };
    camara: {
      trasera: {
        resolucion: string;
      };
      frontal: {
        resolucion: string;
      };
    };
    almacenamiento: string[];
    pantalla: {
      medidas: string;
    };
    otros: {
      resistente_agua_polvo: string;
      tipo_sim: string[];
      nfc: boolean;
      pin_carga: string;
      viene_con_cargador: boolean;
    };
    imagenes: string[];
    
}
