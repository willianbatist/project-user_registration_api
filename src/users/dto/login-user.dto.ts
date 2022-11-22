export class LoginUserDto {
  /**
   * O email será utilizado para realizar login, cadastro e recebimentos de informativos.
   * @example "example@email.com"
   */
  email: string;

  /**
   * Senha criado pelo usuário para ter acesso ao sistema. A mesma será criptrografada.
   * @example "password123"
   */
  password: string;
}
