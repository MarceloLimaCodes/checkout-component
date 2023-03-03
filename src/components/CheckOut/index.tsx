import { useState } from 'react'
import { Product } from '../Product'
import './styles.css'

export function CheckOut() {
  const total: number[] = []

  const products = [
    {
      title: "Produto 1",
      price: 100,
      description: "descrição do produto 1"
    },
    {
      title: "Produto 2",
      price: 150,
      description: "descrição do produto 2"
    },
    {
      title: "Produto 3",
      price: 200,
      description: "descrição do produto 3"
    },
    {
      title: "Produto 4",
      price: 10,
      description: "descrição do produto 4"
    },
  ]

  function soma(values: number[]) {
    let soma = 0;

    for (let i = 0; i < values.length; i++) {
      soma = soma + values[i];
    }

    return soma;
  }

  return (
    <div className="check-out">
      <div className='check-out-card'>
        <h1>Checkout</h1>
        <hr />
          {products && products.map((product) => {
            total.push(product.price)
            return <Product title={product.title} price={product.price} description={product.description} /> 
          })}
        <hr />
        <div className='total'>
          <p>Total</p>
          <p>${soma(total)}</p>
        </div>
      </div>

      <div className='credit-card' >
        <h1>Credit Card Details</h1>
        <hr />

        <form>
          <div className='div-1'>
            <label className='card-holder'>
              <p>CARD HOLDER</p>
              <input type="text" placeholder='Card Holder' />
            </label>

            <label className='expiration-date'>
              <p>EXPIRATION DATE</p>

              <div className="mm-yy">
                <input type="text" maxLength={2} placeholder='MM' />
                <span>/</span>
                <input type="text" maxLength={2} placeholder='YY'/>
              </div>
            </label>
          </div>

          <div className='div-2'>
            <label  className='card-number'>
              <p>CARD NUMBER</p>
              <input type="text" placeholder='Card Number' />
            </label>
            <label className='cvc'>
              <p>CVC</p>
              
              <div className="cvc-content">
                <input type="text" placeholder='CVC' />
              </div>
            </label>
          </div>

          <div className='btn'>
            <button type='submit'>Proceed</button>
          </div>
        </form>
      </div>

    </div>
  )
}