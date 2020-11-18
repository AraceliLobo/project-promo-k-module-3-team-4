import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <main class="main">
        <img
          class="main__logo"
          src="./assets/images/logo-awesome-profile-cards.svg"
          alt="Logo de la página"
          title="Logo de la página"
        />
        <h1 class="main__title">Crea tu tarjeta de visita</h1>
        <p class="main__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
    </p>

        <div class="main__icons">
          <div class="main__icons__item">
            <i class="far fa-object-ungroup main__icons__item__logo"></i>
            <p class="main__icons__item__text">Diseña</p>
          </div>
          <div class="main__icons__item">
            <i class="far fa-keyboard main__icons__item__logo"></i>
            <p class="main__icons__item__text">Rellena</p>
          </div>

          <div class="main__icons__item">
            <i class="fas fa-share-alt main__icons__item__logo"></i>
            <p class="main__icons__item__text">Comparte</p>
          </div>
        </div>
        <Link to="/card">
          <button class="uppercase links main__button"
          >Comenzar</button>
        </Link>
      </main>
    );

  }
}
export default Landing;