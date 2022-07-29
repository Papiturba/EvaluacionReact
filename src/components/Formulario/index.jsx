import React from 'react';
import {
  form,
  tituloInput,
  descripcionInput,
  inputsContainer,
  agregar,
  formContainer,
} from './styles.module.scss';

const Formulario = ({onSubmit, onChange, tarea}) => {
  const {titulo, descripcion} = tarea;

  return (
    <div className={formContainer}>
      <form className={form} onSubmit={e => onSubmit (e)}>
        <h3>Post It Simulator!</h3>
        <div className={inputsContainer}>
          <input
            autoComplete="off"
            className={tituloInput}
            onChange={e => onChange (e)}
            name="titulo"
            value={titulo}
            placeholder="Ingresa Título..."
          />
          <textarea
            autoComplete="off"
            className={descripcionInput}
            onChange={e => onChange (e)}
            name="descripcion"
            value={descripcion}
            placeholder="Ingresa Descripción..."
          />
          <button className={agregar}>Agregar</button>
          <input type="checkbox" name="red" id=""/>
          <label htmlFor="red">Importante!</label>
        
        </div>
      </form>
    </div>
  );
};

export default Formulario;