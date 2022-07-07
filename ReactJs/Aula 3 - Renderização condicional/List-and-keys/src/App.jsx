import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Kaue Jorge',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Aline Oliveira',
        skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
        id: 3,
        name: 'Pedro Henrique',
        skills: ['Assembly']
    },
    {
        id: 4,
        name: 'José Santos',
        skills: ['Reason']
    }
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>

        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li >{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation one</p>
            <p>Bem vindo a nossa aula =D</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;