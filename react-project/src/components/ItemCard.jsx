import React, { Component } from "react";
import styled from "styled-components";

class ItemCard extends Component {
  render() {
    return (
      <StyledCard>
        <div className="Picture">
          <div className="color-overlay">
            <div className="movie-share">
              <a className="movie-share__icon" href="#">
                <span className="add-favourites">Add to Favourites</span>
              </a>
            </div>
            <div className="Card-Bot">
              <h1>{"(Hero name)"}</h1>
              <p>
                {
                  "Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here, Details here "
                }
              </p>
            </div>
          </div>
        </div>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  display: inline-block
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
  }
  .Picture {
    height: 100%;
    background-image: url(http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg);
    background-size: contain;
    background-position: top;
    border-radius: inherit;
    background-repeat: no-repeat;
  }

  .movie-share {
    padding: 1em;
    text-align: right;
    text-decoration: none;
  }

  .movie-share__icon i {
    font-size: 1.2em;
    margin-left: 0.5em;
    color: #ffffff;
    mix-blend-mode: lighten;
    opacity: 0.6;
  }

  .movie-share__icon i:hover {
    opacity: 1;
    mix-blend-mode: lighten;
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
export default ItemCard;
