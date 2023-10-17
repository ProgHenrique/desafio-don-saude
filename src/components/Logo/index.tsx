import logo from 'src/assets/logo.svg'
import { LogoContainer } from './styles'

export default function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="" />
      <span>empy</span>
    </LogoContainer>
  )
}
