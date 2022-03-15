import React, {Component} from 'react'

class App extends Component {
  
state = {
  frases:[
    "Nada é em vão, se não é benção é lição.",
    "A vida não é triste, tem horas tristes.",
    "Faça o que puder, com o que tem, onde estiver. O único passo entre o sonho e a realidade é a atitude.",
  ],
  apareceTela: "",
};
 
 motivationPhrases = () => {
   this.setState({
    apareceTela: this.state.frases[0]})
 }

motivationPhrases01 = () => {
  this.setState({
    apareceTela: this.state.frases[1]})
}

motivationPhrases02 = () => {
  this.setState({
    apareceTela: this.state.frases[2]})
}

 number = (x) => {
   return x * 2;
 } 

  render(){
    return(
      <div>
        <h2>Sente que precisa de um empurrãozinho?</h2>

      <div>
        <p> {this.state.apareceTela} </p>
      </div>

        <button onClick={this.motivationPhrases} >Sim!</button>
        <button onClick={this.motivationPhrases01} > De novo! </button>
        <button onClick={this.motivationPhrases02} > Esse também!</button>


<p>O dobro de 10 é {this.number(10)} </p>

      </div>
    )
  }
} export default App;