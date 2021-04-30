// Requerer que uma prop tenha um tipo específico

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = { quantity: PropTypes.number.isRequired }
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

// Acessar props usando this.props

class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            <ReturnTempPassword tempPassword={"senhatem"} />
          </div>
      );
    }
  };

/* A stateless functional component is any function you write which accepts props and returns JSX.
A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge).
Finally, a stateful component is a class component that does maintain its own internal state.
You may see stateful components referred to simply as components or React components.
*/

/* The code editor has a CampSite component that renders a Camper component as a child. 
Define the Camper component and assign it default props of { name: 'CamperBot' }. 
Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. 
Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/

class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <p>{this.props.name}</p>
      )
    }
  }
  
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  
  Camper.propTypes = { name: PropTypes.string.isRequired }

