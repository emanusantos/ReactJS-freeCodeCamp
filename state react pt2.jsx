// Usando state para ligar um elemento

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this); // toggle para bindar this para a constructor
    }
      toggleVisibility() {
        this.setState(state => {                    // Se a visibility for false, quando o mouse for clicado, o buttonOnClick vai mudar o state pra true e aparecer na tela o que estava sem visibility.
        if (state.visibility === true) {
          return { visibility: false };
        } else {
          return { visibility: true };
        }
      });
      };
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }

// Usando state para fazer um contador simples

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);          // Bindando os this dos constructor methods.
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
    increment() {                                       // Função increment para adicionar 1 unidade ao state
      this.setState(state => ({
        count: state.count + 1
      }));
    }

    decrement() {                                      // Função decrement para adicionar 1 unidade ao state
      this.setState(state => ({
        count: state.count - 1
      }));
    }

    reset() {                                    // Função reset para zerar o state
      this.setState(state => ({
        count: state.count*0
      }));
    }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};