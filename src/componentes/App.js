import React from 'react'
import ReactDom from 'react-dom'
import Buscador from './Buscador'
import ListTarjeta from './ListTarjeta'
import Tarjeta from './Tarjeta'
import Detalle from './Detalle'
import '../style/style.css'

class App extends React.Component{
    constructor(){
        super();
        this.state ={ 
            LstDrincks :[],
            selectDrink:null
        }

    }
    
    onSearchSubmit = term=> {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res=>res.json())
        .then(respuesta=>{
            this.setState({LstDrincks:respuesta.drinks})
        });
    }
    onDrinkSelect = (drink)=>{
        this.setState({selectDrink:drink})
    }
    render (){
        return(
            <div>
                <Buscador onSubmit={this.onSearchSubmit} cantResult={this.state.LstDrincks.length}/>
                <br/>
                <Detalle drink={this.state.selectDrink}/>
                <br/>
                <div className="cardList container">
                    {/* {this.state.LstDrincks.map((i)=>{
                            return(
                                <Tarjeta item={i}/>
                            );
                        })
                    } */}
                    {this.state.LstDrincks.length!=0? 
                        <ListTarjeta 
                            onDrinkSelect ={this.onDrinkSelect} 
                            drincks={this.state.LstDrincks}
                            />
                        :''}
                </div>
            </div>
        );
    }
}

export default App;

// 
