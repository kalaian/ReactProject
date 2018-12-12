import React, { Component } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

class Favs extends Component {
  state = {
    results: [],
    image: []
  };
  componentWillMount() {
    this.loadCharactersDetails();
  }

  loadCharactersDetails = () => {
    const idFromStorage = JSON.parse(localStorage.getItem("hero_ids"));
    console.log(idFromStorage);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${idFromStorage}?apikey=80a0c3d7955eb762515f55d1412ed8cb`
    )
      .then(response => response.json())
      .then(hero =>
        console.log(hero)
        // this.setState({
        //   results: hero.data.results[0],
        //   image: hero.data.results[0].thumbnail
        // })
      );
  };

  render() {
    return (
      <FavsBody>
        <h1>Hero comics details</h1>
        <FavsCard>
          <img
            className="char-image"
            src={`${this.state.image.path}.${this.state.image.extension}`}
          />
          <div className="Picture">
            <div className="color-overlay">
              <div className="movie-share">
                <a
                  className="movie-share__icon"
                  href="#"
                  onClick={() => localStorage.removeItem("hero_id")}
                >
                  <span className="add-favourites">Remove from favourites</span>
                </a>
                <br />
              </div>
              <div className="Card-Bot">
                <h1>{this.state.results.name}</h1>
                <p>{this.state.results.description}</p>
              </div>
            </div>
          </div>
        </FavsCard>
      </FavsBody>
    );
  }
}

const FavsBody = styled.div`
  h1 {
    text-align: center;
  }
`;
const FavsCard = styled.div`
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

    p {
      color: #b0b0b0;
    }
    h1 {
      color: white;
    }
  }
`;
export default Favs;
