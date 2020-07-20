import React from 'react'


class Buscador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term:''
        };
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    };

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div >
                <form onSubmit={this.onFormSubmit}>
                    <nav className="navbar navbar-inverse container ">
                        <div className="input-group container">
                            <input type="text"
                                className="form-control"
                                placeholder="Search"
                                name="term"
                                value={this.state.term}
                                onChange={this.handleOnChange} />
                            
                        </div>
                        <br />
                        <br />
                        <span className="badge badge-light">Resultados: {this.props.cantResult}</span>
                    </nav>
                </form>
            </div>
        );
    }
}

export default Buscador;