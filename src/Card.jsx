//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card ({cor, codigo}) {
  
  return (
    <div style={{backgroundColor: codigo}}>
      <p>{cor}</p>
      <p>{codigo}</p>
    </div>
  )
}