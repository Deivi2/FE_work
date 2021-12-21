import { FC } from 'react'
import { Root } from './styles'

interface IProps {
    width: number
    height: number
    color?: string
}

const Oval: FC<IProps> = props => {
    return <Root {...props}>{props.children}</Root>
}

export default Oval
