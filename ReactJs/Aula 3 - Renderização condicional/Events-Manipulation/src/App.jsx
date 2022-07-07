import React from "react";

const showEvent = () => {
    console.log('Evento clicado')
}

const button = <button onClick={showEvent}>Mostrar Evento</button>

const App = () => {   

    return (
        <div>
            <p>Digital Innovation one</p>
            <p>Bem vindo a nossa aula =D</p>
            {button}
        </div>
    );
};
export default App;