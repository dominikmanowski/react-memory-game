import React, { Component } from 'react'
import styled from 'styled-components'

import CardView from '../CardView'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

class BorderView extends Component {
  state = {
    cardsAmount: 9,
  }

  render() {
    return (
      <Container>
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </Container>
    )
  }
}

export default BorderView
