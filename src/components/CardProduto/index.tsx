import { ProdutoImg } from '../ProdutoImg'
import imagem from '../../assets/logo.jpg'
import './styles.css'

export function CardProduto() {

    const produtos = [
        {
          img: imagem,
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price: 10
        },
        {
          img: imagem,
          description: "descrição do produto 2",
          price: 20
        },
        {
          img: imagem,
          description: "descrição do produto 3",
          price: 10
        },
        
    ]


    return (
        <div className="product-card">
            <h1>Produtos</h1>
            <hr />
            {produtos && produtos.map((produto) => (
                <ProdutoImg imgSrc={produto.img} price={produto.price} description={produto.description} />
            ))}
        </div>
    )
}
