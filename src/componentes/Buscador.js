import React from 'react'


class Buscador extends React.Component {
    state = { term: '' };
    constructor(props){
        super();
    }

    onFormSubmit= (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);

    };

    render() {
        return (
            <div >
                <form onSubmit={this.onFormSubmit}>
                    <nav className="navbar navbar-inverse container ">
                        <div className="input-group container">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Search" 
                                value={this.state.term}
                                onChange={(e)=>this.setState({term:e.target.value})}/>
                                
                        </div>
                        <br/>
                        <br/>
                        <span className="badge badge-light" style={{marginLeft:19}}>Resultados: {this.props.cantResult}</span>
                    </nav>
                </form>
            </div>
        );
    }
}

export default Buscador;