// Renderizando com uma condicional

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this); // Bindando o this no constructor method
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display                       // Quando toggleDisplay for acionado, o state alternará o boolean
      }));
    }
    render() {
      if (this.state.display === true) {                     // Condicional para renderizar de acordo com o valor do display
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
      } else {
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
        );
      };
      
    }
  };

// Resolução do problema anterior usando &&

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display &&<h1>Displayed!</h1>}   { /* Se o state for true, o h1 será retornado. */}
         </div>
      );
    }
  };

// Exemplo usando o operador ternário

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
      this.state = {
        input: '',
        userAge: ''
      };
      // Change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {
            this.state.userAge === '' 
              ? buttonOne
              : this.state.userAge >= 18
                ? buttonTwo
                : buttonThree
          }
        </div>
      );
    }
  }

// Renderizar condicionalmente usando props

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        {this.props.fiftyFifty ? "You win!" : "You lose!"}      { /* Renderiza vitória ou derrota com base na expression */}
      </h1>
    );
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1                    // Inicializando um state counter
    };
    this.handleClick = this.handleClick.bind(this); // Bindando this para o constructor method
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1                  // Aumentando o contador para quando o clique for feito
    });
  }
  render() {
    const expression = Math.random() >= .5 ? true : false;   // Criando uma expressão que retorne um valor aleatório entre 0 e 1.
    return (                                                     // Se for maior que 0,5 = true;
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />           {/* Passa expression como uma prop "fiftyFifty" para o parent component */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

// Exemplo de mudança de estilo com ifelse

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    {this.state.input.length > 15 ? inputStyle.border = '3px solid red' : inputStyle.border }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};