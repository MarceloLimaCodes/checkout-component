import './styles.css'

interface Props {
  title: string
  price: number
  description: string
}

export function Product({ title, price, description }: Props) {

  return (
    <div className="product">
      <div>
        <h1>{title}</h1>
        <h1>${price}</h1>
      </div>
      <p>{description}</p>
    </div>
  )
}
