export const BUTTON_ACTIONS = {
	ADD: 'ADD',
	THEME: 'THEME',
	CALC: 'CALC',
	DELETE: 'DELETE',
}

export const buttons = [
	{
		display: 'C',
		action: BUTTON_ACTIONS.DELETE,
		class: 'btn__op',
	},
	{
		display: '(',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: ')',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: '/',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: '7',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '8',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '9',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: 'x',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: '4',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '5',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '6',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '-',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: '1',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '2',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '3',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '+',
		action: BUTTON_ACTIONS.ADD,
		class: 'btn__op',
	},
	{
		display: '☀️',
		action: BUTTON_ACTIONS.THEME,
		class: '',
	},
	{
		display: '0',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '.',
		action: BUTTON_ACTIONS.ADD,
		class: '',
	},
	{
		display: '=',
		action: BUTTON_ACTIONS.CALC,
		class: 'btn__op',
	},
]
