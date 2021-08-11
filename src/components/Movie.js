import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  };

  render() {
    const { id, title, year, poster } = this.props;
    return (
      <Link to={`/detailsMovie/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img src={poster} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <time dateTime={year}>publicacion: {year}</time>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
