import React, {Component} from 'react';
import CardList from './CardList';
import {peoples} from './people';
import SearchBox from './SearchBox';
import './App.css';



class App extends Component {


///things that needs to be passed to parentApp
	constructor() {

		super()

		this.state = {

			peoples:[],
			seachField:''
		}

	}

	componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users =>this.setState({peoples:users}));
	}

	onSearchChange = (event) => {

		this.setState({ seachField: event.target.value});

	}

	render(){

		const filterPeoples =this.state.peoples.filter(peoples => {

		return peoples.name.toLowerCase().includes(this.state.seachField.toLowerCase());

		});

	if (this.state.peoples.length <9){

		return <div className='tc'><h1>Loading</h1></div>
	}
	else {
     
	return (


		<div className='tc'>

		<h1>MyPeeps</h1>

		<SearchBox searchChange={this.onSearchChange}/>

		<CardList peoples={filterPeoples}/> 

		</div>
		);
    }
  }
}

export default App;