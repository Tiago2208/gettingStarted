import { ITarefa } from '../../../types/ITarefa';
import EstiloItem from './Item.module.scss';

interface Props {
    item: ITarefa,
    selecionarTarefa(tarefaSelecionada: ITarefa): void
}

export default function Item({ item, selecionarTarefa }: Props) {
    return (
        <li className={`${EstiloItem.item} ${item.selecionado ? EstiloItem.itemSelecionado : ""}`}
         onClick={()=>selecionarTarefa(item)}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
        </li>
    );
}