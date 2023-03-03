import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import Botao from '../Botao/Botao'
import { useState } from 'react'

const Formulario = () => {


    

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados abaixo</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                />
                <Botao>
                    Salvar
                </Botao>
            </form>
        </section>
    )


}

export default Formulario