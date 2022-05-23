import EstiloLista from "./Lista.module.scss";
import Item from './Item';
function Lista() {
    const tarefas = [
        { tarefa: "React", tempo: "2:00:00" },
        { tarefa: "Javascript", tempo: "1:00:00" },
        { tarefa: "Java", tempo: "00:30:00" }
    ];
    return (
        <aside className={EstiloLista.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index)=>(
                    <Item
                    key={index}
                    tarefa={item.tarefa}
                    tempo={item.tempo} 
                    />
               ))}
            </ul>
        </aside>
    );
}

export default Lista;