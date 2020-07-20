import React from 'react'
import ReactDom from 'react-dom'
import Detalle from './Detalle'
import Tarjeta from './Tarjeta'
import '../style/style.css'


const ListTarjeta = ({ drincks, onDrinkSelect }) => {
    return (
        <div className="cardList">
            {(drincks || []).map((drinck)=>{
                return (<Tarjeta onDrinkSelect={onDrinkSelect} drink={drinck} />)
            })}
        </div>
    );
}

export default ListTarjeta;



// class Targeta extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             objDrink:[]
//         }        
//         this.setState({ objDrink:props.drincks})
//     }
//     // componentWillMount(){

//     // }


//     cargarDetalle = (event)=>{
//         ReactDom.render(<Detalle img={this.state.objDrin}/>, document.querySelector('#detalleDrink'))
//     }

//     render() {
//         return (
//             <div className="container" >
//                 {/* key={this.props.item.idDrink}  */}
//                 <div className="card" style={{width: 300}} >
//                         <img className="card-img-top" src={this.props.item.strDrinkThumb} width="286px" height="180px" alt="Card image cap"/>
//                         <div className="card-body">
//                             <h5 className="card-title">{this.props.item.strDrink}</h5>
//                             <p className="card-text">Ingredientes: {this.props.item.strIngredient1}, {this.props.item.strIngredient2}...</p>
//                             <button onClick={this.cargarDetalle} className="btn btn-primary">View More</button>
//                         </div>
//                 </div>
//                 <br/>  
//             </div>
//         );
//     }
// }
