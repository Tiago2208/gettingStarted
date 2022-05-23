import React from "react";
import EstiloBotao from "./Botao.module.scss";

class Botao extends React.Component<{children:any}> {
    render() {
        return(
            <button className={EstiloBotao.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;