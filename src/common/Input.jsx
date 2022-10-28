import styled from 'styled-components'

function Input(props) {
  return
}

export default Input

const Input = styled.input`
	border: 1px solid #42364b;
	::placeholder {
		color: #877e8d;
	}

	${({ variant }) => {
		switch (variant) {
			case "long":
				return css`
					width: 480px;
				`;
			default:
				break;
		}
	}}; 
`