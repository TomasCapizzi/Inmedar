import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";

export default function FormContacto() {
    const [formEnviado, setFormEnviado] = useState<boolean>(false);

    // VER COMO MANDAR MAIL DIRECTO DEL FRONT

    function enviarConsulta(consulta: {
        nombre: string;
        empresa: string;
        mail: string;
        consulta: string;
    }){
        //e.preventDefault();
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(consulta),
        }
        fetch('https://formspree.io/f/mwpevgoq', request);
    }

  return (
    <Formik initialValues={{
        nombre: '',
        empresa: '',
        mail: '',
        consulta: ''
    }}

    validate={(consulta)=>{
        const errores= {nombre: '', empresa: '', mail: '', consulta: ''};

        if(!consulta.nombre){
            errores.nombre = 'Ingrese su nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(consulta.nombre)){
            errores.nombre = 'El nombre solo puede contener letras y espacios'
        }

        if(!consulta.empresa){
            errores.empresa = 'Datos Obligatorios'
        }

        if(!consulta.mail){
            errores.mail = 'Ingrese su correo electrónico';
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(consulta.mail)){
            errores.mail = 'El email no es correcto';
        }

        if(!consulta.consulta){
            errores.consulta = 'Por favor indique su consulta';
        }

        return errores;
    }}

    onSubmit={
        (consulta, {resetForm})=>{
            console.log(consulta);
            resetForm();
            enviarConsulta(consulta)
            setFormEnviado(true)
            
            setTimeout(()=>{
                setFormEnviado(false);
            }, 5000)
     }}

    >
        {
            ({errors}) => (
                <Form action="https://formspree.io/f/mwpevgoq" method="POST">
                    <label htmlFor="nombre">Nombre</label>
                    <Field type="text" id="nombre" name="nombre"/>
                    <ErrorMessage name="nombre" component={()=> <p className="error">{errors.nombre}</p>}/>
                    <label htmlFor="empresa">Empresa</label>
                    <Field type="text" id="empresa" name="empresa"/>
                    <ErrorMessage name="empresa" component={()=> <p className="error">{errors.empresa}</p>}/>
                    <label htmlFor="mail">Mail</label>
                    <Field type="email" id="mail" name="mail"/>
                    <ErrorMessage name="mail" component={()=> <p className="error">{errors.mail}</p>}/>
                    <label htmlFor="consulta">Consulta</label>
                    <Field id="consulta" name="consulta" as="textarea" />
                    <ErrorMessage name="consulta" component={()=> <p className="error">{errors.consulta}</p>}/>

                    <button type="submit" onSubmit={()=>console.log('ess')}>Enviar</button>
                    {formEnviado && <p>Formulario enviado con éxito</p>}
                </Form>
            )
        }
    </Formik>
  )
}
