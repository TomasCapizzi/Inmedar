import {useState} from 'react'
import type {gasoterapia} from '../types/gasoterapia';

const useListaGasoterapia = () => {
    const [productsGasoterapia, setProductsGasoterapia] = useState<gasoterapia[]>([]);

    async function getProductsGasoterapia(api:string){
        const response = await fetch(api);
        const res = await response.json();
        setProductsGasoterapia(res.products.sort((a:gasoterapia,b:gasoterapia) => a.orden - b.orden));
    }
  return {
    getProductsGasoterapia,
    productsGasoterapia,
    setProductsGasoterapia
  }
}

export default useListaGasoterapia