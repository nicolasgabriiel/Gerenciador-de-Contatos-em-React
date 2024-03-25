import React from "react";
import { Campo } from "../../styles";

const Formulario =  () =>(
    <>
        <h1>Adicionar Contato</h1>
        <Campo 
        placeholder="Digite o Nome Completo"
        type="text"
        required
        ></Campo>
         <Campo 
        placeholder="Digite o Telefone"
        type="tel"
        required
        ></Campo>
         <Campo 
        placeholder="Digite o Email"
        type="email"
        required
        ></Campo>
        <button>Cancelar</button>
        <button>Adicionar</button>
    </>
)

export default Formulario