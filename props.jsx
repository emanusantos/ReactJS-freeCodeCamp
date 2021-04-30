// Meu primeiro component
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      )
    }
  }
  
  ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))

// Passar props para um componente sem state

const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// Passar array como props

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["do react", "render"]}/>
          <h2>Tomorrow tasks={}</h2>
          <List tasks={["do react", "render", "do coding"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// Usando default props

const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = {items: 0}

// Mudando um valor default de uma prop

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10} />
      { /* Change code above this line */ }
    }
  };