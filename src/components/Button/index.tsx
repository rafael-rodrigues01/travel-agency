import * as S from "./styled"

type ButtonProps = {
  name: string
}

export const Button = ({name}: ButtonProps) => {
  return (
    <S.Button>{name}</S.Button>
  )
}




