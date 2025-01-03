export type accesorio = {
    id: number;
    nombre: string,
    descripcion: string,
    img: string,
    modelos: {
        nombre: string,
        gas: {
            oxigeno: boolean,
            aire: boolean,
            vacio: boolean,
            n2o: boolean,
            n2: boolean,
            co2: boolean,
            iaire: boolean,
            evac: boolean,
        },
        img: string
    },
    accesorio: boolean,
    manual: string,
    gases: boolean,
    accesorioUS: boolean
}