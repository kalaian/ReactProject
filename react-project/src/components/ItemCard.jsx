import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCard = props => (
  <StyledCard>
    <img
      className="char-image"
      src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
          />
    <div className="Picture">
      <div className="color-overlay">
        <div className="movie-share">
          <a className="movie-share__icon" href="#" onClick={() => localStorage.setItem("hero_id", props.id)}>
            <span className="add-favourites" >Add to Favourites</span>
          </a>
          <br />
          <a className="movie-share__icon">
            <Link to= {`/details/${props.id}`}>
              <span className="details">Details</span>
            </Link>
          </a>
        </div>
        <div className="Card-Bot">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  </StyledCard>
);

const StyledCard = styled.div`
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

export default ItemCard;
