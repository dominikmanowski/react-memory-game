import React, { memo, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import "./CardView.scss";


const CardView = ({
  background,
  cardImgUrl,
  cardKey,
  cardId,
  handleFlippingCard,
  isFlipped
}) => {
  const elRef = useRef(null)
  const { transform } = useSpring({
    transform: `perspective(600px) rotateY(${isFlipped ? -180 : 0}deg)`,
    config: { mass: 20, tension: 600, friction: 100 }
  });
  const trans = useCallback((x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`, [])

  const calc = useCallback((x, y) => [
    ((y - elRef.current?.getBoundingClientRect().top) - elRef.current.getBoundingClientRect().height / 2) / 5,
    -((x - elRef.current.getBoundingClientRect().left) - elRef.current.getBoundingClientRect().width / 2) / 5,
    1.05
  ], [])
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <animated.div
      className="game-card"
      onClick={() => handleFlippingCard(cardKey, cardId)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      ref={elRef}
    >
      <animated.div
        className={`${background} front`}
        style={{
          transform: transform.interpolate(t => `${t} rotateY(0deg)`)
        }}
      />
      <animated.div
        className="back"
        style={{
          backgroundImage: `url(${cardImgUrl})`,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      />
    </animated.div>
  );
};

CardView.propTypes = {
  background: PropTypes.string.isRequired,
  cardImgUrl: PropTypes.string.isRequired
};

export default memo(CardView);
