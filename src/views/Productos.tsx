import { useState, useEffect, useRef } from "react";
import Producto from "../components/Productos/Producto";
import useListaGasoterapia from "../hooks/useListaGasoterapia";
import useListaUnidSum from "../hooks/useListaUnidSum";
import useListaAccesorios from "../hooks/useListaAccesorios";
import ProductoAccesorio from "../components/Productos/ProductoAccesorio";
import { MoonLoader } from 'react-spinners';
import { implante } from "../types/implante";
import { productos } from "../data/productos";
import { FaFilter } from "react-icons/fa";

export default function Productos() {
    const apiGasoterapia: string = 'https://famox-api.vercel.app/api/products/gasoterapia';
    const apiUnidadSuministro: string = 'https://famox-api.vercel.app/api/products/unidades-suministro';
    const apiAccesorios: string = 'https://famox-api.vercel.app/api/products/accesorios';

    const {getProductsGasoterapia, productsGasoterapia} = useListaGasoterapia();
    const {getProductsUnidSum, productsUnidSum} = useListaUnidSum();
    const {getProductsAccesorios, productsAccesorios} = useListaAccesorios();

    const [productsImplantes, setProductsImplantes] = useState<implante[]>([]);

    const gasoterapiaRef = useRef<HTMLLIElement>(null);
    const unidadSuministroRef = useRef<HTMLLIElement>(null);
    const accesorioRef = useRef<HTMLLIElement>(null);

    //booleanos categoria
    const [gasoterapiaBool, setGasoterapiaBool] = useState<boolean>(true);
    const [unidadSuministroBool, setUnidadSuministroBool] = useState<boolean>(false);
    const [accesorioBool, setAccesorioBool] = useState<boolean>(false);
    const [implanteBool, setImplanteBool] = useState<boolean>(false);

    useEffect(()=>{
      getProductsGasoterapia(apiGasoterapia);
      getProductsUnidSum(apiUnidadSuministro);
      getProductsAccesorios(apiAccesorios);
      setProductsImplantes(productos)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="productos-view-container">
        <div className="header">
          <h1>Productos</h1>
          <FaFilter className="filter" />
        </div>
        <section>
          <ul className="productos-menu">
            <li className={gasoterapiaBool? "select":""} ref={gasoterapiaRef} onClick={()=>{
              setGasoterapiaBool(true);
              setUnidadSuministroBool(false);
              setAccesorioBool(false);
              setImplanteBool(false);
            }}>Gasoterapia</li>
            <li className={unidadSuministroBool? "select":""} ref={unidadSuministroRef} onClick={()=>{
              setGasoterapiaBool(false);
              setUnidadSuministroBool(true);
              setAccesorioBool(false);
              setImplanteBool(false);
            }} >Unidades de Suministro</li>
            <li className={accesorioBool? "select":""} ref={accesorioRef} onClick={()=>{
              setGasoterapiaBool(false);
              setUnidadSuministroBool(false);
              setAccesorioBool(true);
              setImplanteBool(false);
            }}>Accesorios</li>
            <li className={implanteBool? "select":""} onClick={()=>{
              setGasoterapiaBool(false);
              setUnidadSuministroBool(false);
              setAccesorioBool(false);
              setImplanteBool(true);
            }}>Implantes</li>
          </ul>
          <ul className="productos-list">
            {
              gasoterapiaBool ?
                productsGasoterapia.map(
                  producto => <Producto prod={producto} key={producto.id}/>
                ) : productsGasoterapia.length ? null : <MoonLoader color="#206FB1" />
            }
            {
              unidadSuministroBool ?
                productsUnidSum.map(
                  producto => <Producto prod={producto} key={producto.id}/>
                ) : productsUnidSum.length ? null : <MoonLoader color="#206FB1" />
            }
            {
              accesorioBool ?
                productsAccesorios.map(
                  producto => <ProductoAccesorio prod={producto} key={producto.id}/>
                ) : productsAccesorios.length ? null : <MoonLoader color="#206FB1" />
            }
            {
              implanteBool ?
                productsImplantes.map(
                  producto => <Producto prod={producto} key={producto.id}/>
                ) : productsImplantes.length ? null : <MoonLoader color="#206FB1" />
            }

          </ul>
        </section>
    </div>
  )
}