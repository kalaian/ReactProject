import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchHeroesDetails } from "../actions/ItemsAction";

export class HeroDetails extends Component {
  componentDidMount() {
    this.props.fetchHeroesDetails(this.props.match.params.id);
  }

  render() {
    return (
      <DetailsBody>
        <h1>Hero comics details</h1>
        <DetailsCard>
          <img
            alt=""
            className="char-image"
            src={`${this.props.image.path}.${this.props.image.extension}`}
          />
          <div className="Picture">
            <div className="color-overlay">
              <div className="movie-share" />
              <div className="Card-Bot">
                <h1>Available: {this.props.hero.available}</h1>
                <p>ResourceURI: {this.props.hero.collectionURI}</p>
              </div>
            </div>
          </div>
        </DetailsCard>
      </DetailsBody>
    );
  }
}

const DetailsBody = styled.div`
  h1 {
    text-align: center;
  }
`;
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

  .Card-Bot {
    min-height: 45%;
    padding: 0 15px 15px;
    word-wrap: break-word;

    p {
      color: #b0b0b0;
    }
    h1 {
      color: white;
    }
  }
`;
const mapStateToProps = state => ({
  hero: state.heroes.hero,
  image: state.heroes.image
});
export default connect(
  mapStateToProps,
  { fetchHeroesDetails }
)(HeroDetails);
