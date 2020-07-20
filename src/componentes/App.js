import React from 'react'
import ReactDom from 'react-dom'
import Buscador from './Buscador'
import ListTarjeta from './ListTarjeta'
import Tarjeta from './Tarjeta'
import Detalle from './Detalle'
import '../style/style.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            LstDrincks: [],
            selectDrink: null
        }

    }

    onSearchSubmit = term => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(respuesta => {
                this.setState({ LstDrincks: respuesta.drinks || [] })
            });
    }
    onDrinkSelect = (drink) => {
        this.setState({ selectDrink: drink })
    }
    render() {
        const { selectDrink, LstDrincks } = this.state;
        return (
            <div>
                <Buscador onSubmit={this.onSearchSubmit} cantResult={LstDrincks.length} />
                <br />
                {selectDrink ? <Detalle drink={selectDrink} /> : null}
                <br />
                {!selectDrink ? <div className="cardList container">
                    {LstDrincks.length ?
                        <ListTarjeta
                            onDrinkSelect={this.onDrinkSelect}
                            drincks={LstDrincks}
                        />
                        : null}
                </div> : null}
            </div>
        );
    }
}

export default App;

// 
