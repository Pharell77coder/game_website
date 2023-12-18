import React from 'react'
const position = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]


function Board() {
  return (
    <div className="plateau">
    <button><div>s</div>
    <div>s</div>
    <div>s</div>
    <div>s</div>
    <div>s</div>
    <div>s</div></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
</div>
  )
}

export default Board;