import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Botao";
import EstiloForm from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {


    state = {
        tarefa: "",
        tempo: "00:00:00"
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ... this.state, selecionado: false, completado: false, id: uuidv4() }])
        this.state.tarefa = ""
        this.state.tempo = "00:00:00"
    }
    render() {
        return (
            <form className={EstiloForm.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
                <div className={EstiloForm.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder="O que você quer estudar?"
                        required />
                </div>
                <div className={EstiloForm.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;