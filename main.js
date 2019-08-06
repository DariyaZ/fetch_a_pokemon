function Pokemon(props) {
	return (
		<div className='pokemon_container'>
			<p className='name'>{props.name}</p>
			<img src={props.image}/>
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
		fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}/`)
		.then(data => data.json())
		.then((poke) => this.setState({
			name: poke.name,
			image: poke.sprites.front_default
		}));
	}

	render() {
		const {name, image} = this.state;

		return (
			<Pokemon name={name} image={image}/>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));