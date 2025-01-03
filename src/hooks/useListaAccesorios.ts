import {useState} from 'react'
import type {accesorio} from '../types/accesorio';


const useListaAccesorios = () => {
    const [productsAccesorios, setProductsAccesorios] = useState<accesorio[]>([]);

    async function getProductsAccesorios(api:string){
        const response = await fetch(api);
        const res = await response.json();
        setProductsAccesorios(res.products);
    }
  return {
    getProductsAccesorios,
    productsAccesorios
  }
}

export default useListaAccesorios