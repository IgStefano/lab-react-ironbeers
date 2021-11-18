import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import FormField from './FormField';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  const [isSending, setIsSending] = useState(false);

  // {} => chave (curly bracket)
  // [] => colchete (square bracket)

  function handleChange(event) {
    // ATENÇÃO: a função de atualização de state é DESTRUTIVA, ou seja, ela substitui o state anterior pelo novo. Quando o state é um objeto, se não quisermos perder as chaves anteriores em uma atualização, precisamos salvar todas as chaves existentes usando a sintaxe de espalhamento (...)
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  function handleSubmit(event) {
    // Impedir o comportamento padrão do formulário de enviar os dados pela URL
    event.preventDefault();

    // Coloca o estado do formulário como "enviando"
    setIsSending(true);

    // Entregar os dados armazenados no state para nossa API disparando uma requisição HTTP do tipo POST

    // O método post do Axios recebe 2 argumentos: primeiro a URL da API, segundo o objeto contendo as informações que queremos enviar
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then((response) => {
        console.log(response);
        // Tira o estado de "enviando"
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input Name */}
      <FormField
        label="Name"
        id="inputName"
        type="text"
        name="name" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.name}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="Tagline"
        id="inputTagline"
        type="text"
        name="tagline" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.tagline}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="Description"
        id="inputDescription"
        type="text"
        name="description" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.description}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="First Brewed"
        id="inputFirstBrewed"
        type="text"
        name="first_brewed" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.first_brewed}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="Brewer's Tips"
        id="inputBrewersTips"
        type="text"
        name="brewers_tips" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.brewers_tips}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="Attenuation Level"
        id="inputAttenuationLevel"
        type="number"
        name="attunuation_level" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.attenuation_level}
        required // Torna o preenchimento desse campo obrigatório
      />

      <FormField
        label="Contributed By"
        id="inputContributedBy"
        type="text"
        name="contributed_by" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.contributed_by}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* IMPORTANTE: o botão de entrega do formulário precisa estar DENTRO da tag <form> e precisa ter seu atributo 'type' setado para 'submit' */}
      <div className="mt-3 d-flex justify-content-center">
        <button
          disabled={isSending}
          type="submit"
          className="btn btn-primary w-100"
        >
          {isSending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Add New
        </button>
      </div>
    </form>
  );
}

export default Form;
