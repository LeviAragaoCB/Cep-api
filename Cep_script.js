 const consultarCep = () => {
    console.log('chamou api')
    const cep = document.getElementById('cep').value

    let uri = `https://cep.awesomeapi.com.br/json/${cep}`

    console.log(`URI: ${uri}`)
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json)

        document.getElementById('logradouro').value = json.address
        document.getElementById('bairro').value = json.district
        document.getElementById('ddd').value = json.ddd
        document.getElementById('uf').value = json.state
        document.getElementById('localidade').value = json.city
    })
}

const fetchEstados = () => {
  let uriEstados = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

  console.log(`URI: ${uriEstados}`)
  fetch(uriEstados)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        let options = `<option select disable>Selecione...</option>`

        data.forEach(estado => {
          options += `<option value="${estado.sigla}">${estado.nome}</option>`
        });

        document.getElementById('uf').innerHTML = options
      })
}
fetchEstados()

const fetchCidades = () => {
  let uriCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/municipios`

  console.log(`URI: ${uriCidades}`)
  fetch(uriCidades)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        let options = `<option select disable>Selecione...</option>`

        data.forEach(cidade => {
          options += `<option value="${cidade.nome}">${cidade.nome}</option>`
        });

        document.getElementById('localidade').innerHTML = options
      })
}
fetchCidades()