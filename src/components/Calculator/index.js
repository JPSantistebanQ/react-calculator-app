import React from 'react'
import { buttons } from '../../utils/ButtonsConfig'
import BtnAction from './BtnAction'

import styles from './styles.module.css'

const Calculator = () => {
	return (
		<div className={styles.calculator}>
			<div>
				<div>20*5</div>
				<div>100</div>
			</div>
			<div>
				{buttons.map((item, i) => (
					<BtnAction key={i} item={item} />
				))}
			</div>
		</div>
	)
}

export default Calculator
