import React, { Component, Fragment } from "react";
import styled from "styled-components";

export class HeroDetails extends Component {
  state = {
    results: [],
    image: []
  };
  componentWillMount() {
    this.loadCharactersDetails();
  }

  loadCharactersDetails = () => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${
        this.props.match.params.id
      }?apikey=80a0c3d7955eb762515f55d1412ed8cb`
    )
      .then(response => response.json())
      .then(hero =>
        // console.log(hero.data.results[0].thumbnail)
        this.setState({
          results: hero.data.results[0].comics,
          image: hero.data.results[0].thumbnail
        })
      );
  };

  render() {
    return (
      <DetailsBody>
      <h1>Hero comics details</h1>
      <DetailsCard>
        <img
          className="char-image"
          src={`${this.state.image.path}.${this.state.image.extension}`}
        />
        <div className="Picture">
          <div className="color-overlay">
            <div className="movie-share" />
            <div className="Card-Bot">
              <h1>Available: {this.state.results.available}</h1>
              <p>ResourceURI: <a>{this.state.results.collectionURI}</a></p>
            </div>
          </div>
        </div>
      </DetailsCard>
      </DetailsBody>
    );
  }
}

const DetailsBody = styled.div`
  h1{
    text-align: center;
  }
`
const DetailsCard = styled.div`
  position: relative;
  display: inline-block;
  margin: 20px;
  height: 400px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 30px #00212d;
  filter: brightness(0.9) saturate(80%);
  transition: transform 0.6s, box-shadow 0.6s, filter 0.4s;
  &:hover {
    box-shadow: 1px 1px 40px #f9b916;
    transform: scale(1.02);
    filter: brightness(1.2) saturate(110%);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .color-overlay {
    height: 100%;
    background: linear-gradient(
      rgba(180, 180, 255, 0.1) 35%,
      rgba(33, 33, 32, 0.8) 55%,
      rgba(33, 33, 32, 1) 60%
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .add-favourites {
    color: white;
    text-decoration: none;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .details {
    color: white;
    text-decoration: none;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .char-image {
    width: 100%;
    height: 100%;
  }
  .char-image + .Picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .movie-share {
    padding: 1em;
    text-align: right;
    text-decoration: none;
  }

  .Card-Bot {
    min-height: 45%;
    padding: 0 15px 15px;
    word-wrap: break-word

    p {
      color: #b0b0b0;
    }
    h1 {
      color: white;
    }
  }
`;
export default HeroDetails;
