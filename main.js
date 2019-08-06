function Pokemon(props) {
	return (
		<div className='pokemon_container'>
			<h1 className='name'>{props.name}</h1>
			<img src={props.image} alt={`pokemon ${props.name}`}/>
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			image: null
		}
	}

	componentDidMount() {
		const pokemonId = 1 + Math.floor(Math.random() * 807);

		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
		.then(data => data.json())
		.then((response) => this.setState({
			name: response.name,
			image: response.sprites.front_default
		}))
	}

	render() {
		const {name, image} = this.state;

		return (
			<Pokemon name={name} image={image}/>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));