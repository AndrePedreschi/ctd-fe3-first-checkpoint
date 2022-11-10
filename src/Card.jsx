//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './card.scss'
export function Card({ cor, codigo }) {

  function verificarCor(){
    var c = codigo
    c = c.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >> 8) & 0xff;  // extract green
    var b = (rgb >> 0) & 0xff;  // extract blue
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    
    if (luma < 200) {
      return '#ffffff'
    }else{
      return '#000000'
    }
  }
  
  const style = {
    backgroundColor: codigo,
    color:verificarCor()
  }
  return (
    <div className='cardStyle' style={style}>
      <p className='nomeStyle' >{cor}</p>
      <p className='codigoStyle'>{codigo}</p>
    </div>
  )
}