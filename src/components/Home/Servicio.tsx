
type Props = {
    titulo:string,
    texto: string,
    img: string

}

export default function Servicio({titulo, texto, img}: Props) {
  return (
    <div className="servicio">
      <div>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <img src={img} alt="servicio" />
    </div>
  )
}