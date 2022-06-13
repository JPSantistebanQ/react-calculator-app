import React from 'react'
const BtnAction = ({ item }) => {
	return <button className={item.class}>{item.display}</button>
}

export default BtnAction
