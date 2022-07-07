import React from "react";

const buttonA = <button>Histórico de Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico de clientes.
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique no botão abaixo para cadastrar o cliente.
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null

        return(
            <div>
                <h1>Nome do cliente: Kaue Jorge</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation one</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer()}
            </div>
        </div>
    );
};
export default App;