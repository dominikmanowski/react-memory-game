import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  perspective: 150px;
  position: relative;
  height: 150px;
  width: 150px;
  margin: 15px;
`
const CardFront = styled.div`
  background-color: teal;
  height: 150px;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
`

const CardBack = styled.div`
  background-color: darkturquoise;
  height: 150px;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  transform: rotateY(180deg);
`

class CardView extends Component {
  state = {
    isFlipped: false,
    isGuessed: false,
  }

  render() {
    return (
      <Card>
        <CardFront />
        <CardBack />
      </Card>
    )
  }
}

export default CardView
