/* The best practice with React is to place API calls or any calls to your server 
in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. 
Any calls to setState() here will trigger a re-rendering of your component. 
When you call an API in this method, and set your state with the data that the API returns, 
it will automatically trigger an update once you receive the data. */

// Lifecycle Method componentDidMount()

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers} </h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }


// Adicionar Event Listeners

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);       // Adicionar o evento keydown e ativar a callback handleKeyPress.
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);  // Remover o evento keydown e ativar a callback handleKeyPress.
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };

// Só com pares

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      if (nextProps.value % 2 == 0) {
        return true
      } else {
        return false;
      }
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }