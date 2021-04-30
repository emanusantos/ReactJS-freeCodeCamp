// Criando um input controlado

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(variavel) {
      this.setState({
        input: variavel.target.value    // Função que recebe uma variável (variavel) que acessa o valor da prop input do state.
      })
    }
    render() {
      return (
        <div>
          <input value = {this.state.input} onChange = {this.handleChange.bind(this)} /> { /* Note que se o atributo do input
                                                                                        fosse apenas o state do value, não seria possível digitar nada. */ }
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

// O atributo onChange permite que a prop input do state seja alterada de acordo com o que for digitado na tela.
// Isso é possível por causa da função handleChange.

// Criando um form controlado

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);   
      this.handleSubmit = this.handleSubmit.bind(this);   // Binds de this para os constructor methods.
    }
    handleChange(event) {
      this.setState({                              // setState do input para o que estiver sendo escrito na tela
        input: event.target.value             // Variável event para alterar o valor da prop input
      });
    }
    handleSubmit(event) {
      event.preventDefault()   // preventDefault() para impedir que a página seja submitada com o input em branco.
      this.setState({
        submit: this.state.input                  // Faz a state prop submit assumir o valor da state prop input
      })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>          {/* Quando o input for submitado, chama-se a função handleSubmit */}
            <input value = {this.state.input} onChange = {this.handleChange}/>  {/* Chama a função handleChange para alterar o valor do input para o que estiver sendo digitado. */}
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>  {/* Renderiza um h1 com o que foi escrito no input, após o clique no submit */}
        </div>
      );
    }
  };