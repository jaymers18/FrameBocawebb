import './App.css';
import logo from './img/logo.png';
import {Component} from 'react';
import {Busca} from './components/Busca';
import {Cabecalho} from './components/Cabecalho';
import {Lista} from './components/Lista';
import {Rodape} from './components/Rodape';


class App extends Component{

  state = {
    busca:'',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {busca, odas} = this.state; //Atribuição via desestruturação
      return (
        <section className= "container">

          <Cabecalho
            foto={logo}
          />

          <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
          />

          <p className='qntd'>{odas.length} odas</p>
          {odas.map(oda => (
            <Lista 
              key={oda._id} 
              nome={oda.nome} 
              usuario={oda.usuario} 
              descricao={oda.descricao} 
              data_inclusao={oda.data_inclusao} 
              palavras_chave={oda.palavras_chave}
            />
          ))}

          <Rodape/>
        </section>
      )
    }
  }

export default App;