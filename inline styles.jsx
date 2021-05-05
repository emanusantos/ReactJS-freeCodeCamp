// Introduzindo inline styles

class Colorful extends React.Component {
    render() {
      return (
        <div style={{
          color: "red",
          fontSize: "72px"
        }}>Big Red</div>
      );
    }
  };

// Fazendo const de styles

const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple",
};

class Colorful extends React.Component {
render() {
  return (
    <div style={styles}>Style Me!</div>
  );
}
};