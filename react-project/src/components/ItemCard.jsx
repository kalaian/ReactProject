import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class ItemCard extends React.Component {
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("hero_ids")).length < 0) {
      localStorage.setItem("hero_ids", JSON.stringify([]));
    }
  }

  saveDataToLocalStorage = id => {
    let heroIdsArr = JSON.parse(localStorage.getItem("hero_ids"));

    if (heroIdsArr.includes(id)) {
      heroIdsArr.splice(heroIdsArr.indexOf(id), 1);
    } else {
      heroIdsArr.push(id);
    }

    localStorage.setItem("hero_ids", JSON.stringify(heroIdsArr));
  };

  render() {
    return (
      <StyledCard>
        <img
          alt=""
          className="char-image"
          src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`}
        />
        <div className="Picture">
          <div className="color-overlay">
            <div className="movie-share">
              <input
                key={this.saveDataToLocalStorage}
                type="checkbox"
                onClick={() => this.saveDataToLocalStorage(this.props.id)}
              />
              <br />
              <Link to={`/details/${this.props.id}`}>
                <span className="details">Details</span>
              </Link>
            </div>
            <div className="Card-Bot">
              <h1>{this.props.name}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </StyledCard>
    );
  }
}

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

  input[type="checkbox"] {
    transform: translate3D(-50%, -50%, 0);
    left: 50%;
    top: 50%;

    &:before,
    &:after {
      content: "";
      cursor: pointer;
      background-image: url(http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png);
      background-size: cover;
      height: 30px;
      width: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      filter: grayscale(100%);
    }

    &:after {
      opacity: 0;
      filter: grayscale(0%);
    }

    &:checked {
      &:before {
        filter: grayscale(0%);
      }

      &:after {
        animation: ascend ease-in-out 800ms;
      }
    }
  }

  @-webkit-keyframes ascend {
    0% {
      transform: translate3D(-50%, -50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate3D(-50%, -200%, 0);
      opacity: 0;
    }
  }
  @-moz-keyframes ascend {
    0% {
      transform: translate3D(-50%, -50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate3D(-50%, -200%, 0);
      opacity: 0;
    }
  }
  @keyframes ascend {
    0% {
      transform: translate3D(-50%, -50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate3D(-50%, -200%, 0);
      opacity: 0;
    }
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
