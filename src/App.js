import React, { Component } from 'react';
import './App.css';

const people = [
  {
    id: 1,
    first: "Chandler",
    last: "Bing",
    age: 25
  },
  {
    id: 2,
    first: "Joey",
    last: "Tribbiani",
    age: 26
  },
  {
    id: 3,
    first: "Monica",
    last: "Geller",
    age: 30
  },
  {
    id: 4,
    first: "Ross",
    last: "Geller",
    age: 27
  },
  {
    id: 5,
    first: "Phoebe",
    last: "Buffay",
    age: 31
  },
  {
    id: 6,
    first: "Rachel",
    last: "Green",
    age: 26
  },
]

function searchingFor(term){
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term; 
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      people : people,
      term: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }
  handleSubmit(event) {
    alert('A name was submitted');
    event.preventDefault();
  }
  render() {
    const{term, people} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type = "text" onChange={this.handleChange} value={term} placeholder="Search..."/>
          <input type='Submit' value='Submit'/>
        </form>
        {
          people.filter(searchingFor(term)).map(people => 
              <div key= {people.id}>
                <h1>{people.first}</h1>
                <h1>{people.last}</h1>
                <h2>{people.age}</h2>
                <hr/>
              </div> 
          )
        }
      </div>
    );
  }
}

export default App;
