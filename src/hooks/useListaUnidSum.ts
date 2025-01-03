import {useState} from 'react'
import type {unidadSuministro} from '../types/unidadSuministro';

const useListaUnidSum = () => {
    const [productsUnidSum, setProductsUnidSum] = useState<unidadSuministro[]>([]);

    async function getProductsUnidSum(api:string){
        const response = await fetch(api);
        const res = await response.json();
        setProductsUnidSum(res.products.sort((a:unidadSuministro,b:unidadSuministro) => a.orden - b.orden));
    }
  return {
    getProductsUnidSum,
    productsUnidSum
  }
}

export default useListaUnidSum