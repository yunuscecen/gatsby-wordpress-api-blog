import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Wrapper, Content } from "./Quote.styles"
import QuoteImg from "../../images/quote.svg"

const Quote = () => {
  const data = useQuoteQuery()
  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{data.wpPage.ACF_HomePage.citat1Text}</h6>
        <p>{data.wpPage.ACF_HomePage.citat1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
