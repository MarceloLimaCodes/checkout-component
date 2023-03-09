import './styles.css'

interface Props {
  imgSrc: string
  description: string
  price: number
}

export function ProdutoImg({ imgSrc, description, price }: Props) {

  return (
    <div className="produto">
      <div>
        <img src={imgSrc} alt="imagem do produto" />
        <p>{description}</p>
        <h1>R${price}</h1>
      </div>
    </div>
  )
}