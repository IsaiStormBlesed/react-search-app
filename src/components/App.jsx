import React from 'react'
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar';
import {ImageList} from './ImageList';

export class App extends React.Component {

	state = { images: [] }

	onSearch = async (searchTerm) => {
		const response = await unsplash.get('/search/photos', {
			params: {
				query: searchTerm
			},
		})

		this.setState({ images: response.data.results })
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '15px' }}>
				<SearchBar onSearch={ this.onSearch }/>
				<ImageList images={ this.state.images }/>
			</div>
		)
	}

}
