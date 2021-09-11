import logo from './logo.svg';
import React,{Component} from 'react';
import "./CardList"
import './App.css';
import CardList from './CardList';
import SearchBox from './Search';
import './Search.css'

class  App extends Component {
  constructor(){
    super();
    this.state ={
      monsters : [],
      searchField : ''
  
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }
  
  render(){
    const {monsters,searchField}= this.state;
    const filterMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
<>
   
    <div className="App">
      <h1 className="title">MALKIN ROLODEX</h1>
      
      {/* <input
      type="search"
      placeholder="enter monster" 
      onChange={e =>this.setState({searchField: e.target.value})
      }
        /> */}

    <SearchBox
    type="search"
    placeholder="enter monster" 
    handlechange={e =>this.setState({searchField: e.target.value})}
    
    />

        
    <CardList monsters={filterMonster}/> 
    {/* <CardList monsters={this.state.monsters}/>  */}
    

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {this.state.string}
        </p>
        <button onClick={()=> this.setState({string: "hello"})}>change text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </>
    
  );
}
}

export default App;
