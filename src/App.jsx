import './app.scss'
import { useState } from 'react'
import { Card } from './Card'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente





function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState('')
  const [codigoCor, setCodigoCor] = useState('')
  const [listaCor, setListaCor] = useState([])
  const [formularioErro, setFormularioErro] = useState(false)

  function limparFormulario() {
    setNomeCor('')
    setCodigoCor('')
  }


  function cadastrarCor(evento) {
    evento.preventDefault();

    const novoCorCadastrada = {
      nome: nomeCor,
      codigo: codigoCor,
    }
    setListaCor([...listaCor, novoCorCadastrada]);

    //console.log(listaCor);

    //limparFormulario()

  }

  return (
    <main className='mainStyle'>
      <div className="app">
        <h1>ADICIONAR NOVA COR</h1>
        <form onSubmit={event => cadastrarCor(event)} className={formularioErro ? 'form-erro' : ''}>

          <div className='formBox'>
            <div>
              <label htmlFor="nomeCor">Nome</label>
              <input id='nomeCor' type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />
            </div>

            <div>
              <label htmlFor="codigoCor">Cor</label>
              <input id='codigoCor' type="color" value={codigoCor} onChange={event => setCodigoCor(event.target.value)} />
            </div>
          </div>

          <div className='buttonStyle'>
            <button type='submit'>ADICIONAR</button>
          </div>
        </form>
      </div>

      <div className='msgErrorBox'>
        {formularioErro
          ? <p className='msgErroStyle'>Por favor, verifique os dados inseridos no formulário</p>
          : <p className='msgErroStyle'></p>
        }
      </div>

      <div className='colorBox'>
        <h1>CORES FAVORITAS</h1>
        {listaCor.map((cor, index) => {
          return (
            <Card key={index} cor={cor.nome} codigo={cor.codigo} />
          )
        })}
      </div>

    </main>

  )
}

export default App