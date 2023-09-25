import { createElement, useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)
  const changeNum = (increase) => {
    return () => (increase ? setNumber(number + 1) : setNumber(number - 1))
  }
  const input = createElement('input', { title: 'counter-value', value: number, onChange: (e) => setNumber(e.target.value) })
  const increBtn = createElement('input', { type: 'button', value: 'increase', onClick: changeNum(true) })
  const decreBtn = createElement('input', { type: 'button', value: 'decrease', onClick: changeNum() })
  return createElement('div', {}, input, increBtn, decreBtn)
}
