import React from 'react'
import '../style/style.css'


const Tarjeta = ({drink, onDrinkSelect})=>{
    return (
        <div className="container " >
             {/* key={this.props.item.idDrink}  */}
            <div className="card" style={{width: 300}} >
                    <img className="card-img-top" src={drink.strDrinkThumb} width="286px" height="180px" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{drink.strDrink}</h5>
                        <p className="card-text">Ingredientes: {drink.strIngredient1}, {drink.strIngredient2}...</p>
                        <button onClick={()=> onDrinkSelect(drink)}  className="btn btn-primary">View More</button>
                    </div>
            </div>
            <br/>  
        </div>
    );

}
export default Tarjeta;