import React from "react";
import Botao from "../Botao";
import EstiloForm from "./Formulario.module.scss";

class Formulario extends React.Component {
    render() {
        return (
            <form className={EstiloForm.novaTarefa}>
                <div className={EstiloForm.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required />
                        </div>
                <div className={EstiloForm.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                        <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
                        </div>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;