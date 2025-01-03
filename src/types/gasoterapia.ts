export type gasoterapia = {
    id: number;
    nombre: string,
    uso: string,
    rango: string,
    anmat: boolean,
    manual: string,
    img: string,
    conector: {
        diss: string,
        afnor: string,
        ss_aga: string,
        ohmeda: string,
        on: string,
        cu: string,
        iram: string,
        yugo: string
    },
    gases: {
        oxigeno: string,
        aire: string,
        n2o: string,
        n2: string,
        co2: string,
        vacio: string,
        oxigeno_aire: string
    },
    conexion: boolean,
    gas: boolean,
    modelos: boolean,
    rangos:[{rango: string}],
    gasoterapia: boolean,
    conectores: [string],
    gases_: [string],
    orden: number,
}