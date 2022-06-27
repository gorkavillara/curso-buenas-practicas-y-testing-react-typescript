import React from "react";

export default class ClassComponent extends React.Component<{}, { number: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    // Ejecutaba todo el código después de haberse montado el componente
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(r => console.log(r))
        .catch(e => console.error(e))
  }

  render() {
    return <div>Número {this.state.number}</div>;
  }
}
