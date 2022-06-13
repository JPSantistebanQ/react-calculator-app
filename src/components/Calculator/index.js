import React from 'react'
import { buttons } from '../../utils/ButtonsConfig'
import BtnAction from './BtnAction'

import styles from './styles.module.css'

const Calculator = () => {
	return (
		<div className={styles.calculator}>
			<div className={styles.calculator__result}>
				<div className={styles.calculator__result__exp}>20*5</div>
				<div className={styles.calculator__result__exp}>100</div>
			</div>
			<div className={styles.calculator__btns}>
				{buttons.map((item, i) => (
					<BtnAction key={i} item={item} />
				))}
			</div>
		</div>
	)
}

export default Calculator
