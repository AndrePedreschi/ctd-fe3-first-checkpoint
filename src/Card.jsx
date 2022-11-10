//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './card.scss'
export function Card ({cor, codigo, border}) {
 
  const style={
    backgroundColor: codigo
  }
  return (
    <div className='cardStyle' style={style}>
      <p className='nomeStyle'>{cor}</p>
      <p className='codigoStyle'>{codigo}</p>
    </div>
  )
}