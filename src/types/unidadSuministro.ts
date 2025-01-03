export type unidadSuministro = {
    id: number;
    nombre: string,
    uso: string,
    anmat: boolean,
    img: string,
    conexion: boolean,
    gas: boolean,
    modelos: boolean,
    gasoterapia: boolean,
    mediaTension: [string],
    bajaTension: [string],
    conectores: [string],
    gases: [string],
    orden: number,
    longitud: boolean,
    manual: string
}