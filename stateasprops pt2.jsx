// Passando métodos como props

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this); // Bindando o this para o constructor method.
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value                // Função para alterar a inputValue state prop para o que for escrito no input
      });
    }
    render() {
      return (
         <div>
             { /* Renderizando o GetInput e adicionando a prop input e a prop handleChange */}
            <GetInput input = {this.props.inputValue} handleChange = {this.handleChange} /> 
            { /* Renderizando o RenderInput e adicionando a state prop input */}
            <RenderInput input = {this.state.inputValue} />
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };