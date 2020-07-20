import React from 'react'
import '../style/style.css'



const Detalle = ({drink})=>{
    var salida="";
    if (!drink) {
        return <div className="container">Cargando...</div>
    }
    else{
        const propoiedades = Object.entries(drink);
        const ingredientes = propoiedades.filter( 
            couple => couple[0].startsWith('strIngredient')  && couple[1] != null
        );
        const cantidades = propoiedades.filter( 
            couple => couple[0].startsWith('strMeasure')  && couple[1] != null
        );
        const ingredientesTex = ingredientes.map( 
            ing => ing[1]
        );
        const cantidadesTex = cantidades.map( 
            cant => cant[1]
        );
        for (let i = 0; i < ingredientesTex.length; i++) {
            salida += ingredientesTex[i] + " - " + cantidadesTex[i] + ", ";  
        }
        console.log(ingredientes.join(' - ')  );
        console.log(cantidades.join(' - '));

    }
    return (
        <div >
            <div className="container card detalle">
                <br/>

                <img className="" src={drink.strDrinkThumb}  width="200px" height="180px" />

                <br/>
                <div className="container">
                    <p>
                        <strong>Ingrdientes:</strong> {salida}
                        <p>
                            <strong>Instrucciones:</strong> {drink.strInstructions}
                            
                        </p>
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Detalle;