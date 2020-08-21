import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonHome } from '../components/ButtonHome';


const API_KEY = 'd45ac7f8';


export class DetailsMovie extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then((res) => res.json())
            .then((movie) => {
                this.setState({ movie });
            });
    }

    componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params;
        this.fetchMovie({ id });
    }

    render() {
        const {
            Title,
            Poster,
            Actors,
            Metascore,
            Plot
        } = this.state.movie;

        return (
            <div>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <br/>
                <ButtonHome />
            </div>
        );
    }
}