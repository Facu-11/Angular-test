
export interface Procesador {
    tipo: string;
    cantidad_nucleos: number;
    potencia: string;
}

export interface Camara {
    trasera: {
        resolucion: string;
    };
    frontal: {
        resolucion: string;
    };
}

export interface Pantalla {
    medidas: string;
}

export interface Otros {
    resistente_agua_polvo: string;
    tipo_sim: string[];
    nfc: boolean;
    pin_carga: string;
    viene_con_cargador: boolean;
}

export interface IphoneProduct {
    modelo: string;
    procesador: Procesador;
    camara: Camara;
    almacenamiento: string[];
    pantalla: Pantalla;
    otros: Otros;
    imagenes: string[];
}