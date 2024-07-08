// Manera normal de encapsulamiento de componentes sin ocupar div

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1> {title} </h1>
      {/* <code> {JSON.stringify(newMessage)} </code> */}
      <p> {subtitle} </p>
      <p> {name} </p>
    </>
  );
};
// PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

/**
 * Las default props entras primero que las propTypes 
 * (compatibilidad con defaultProps se eliminará de los componentes 
 * de funciones en una versión importante futura.) */

// FirstApp.defaultProps = {
//   name: "Erick Gonzalez",
//   subtitle: "No hay subtitulo",
//   // title: "No hay ningun titulo",
// };
