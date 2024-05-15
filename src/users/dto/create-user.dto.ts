export class CreateUserDto {


  /**
   * O sobrenome será utilizado caso precise exibir ou utilizar o nome completo do usuário.
   * @example "Alves Batista"
   */
  last_name: string;

  /**
   * O username será utilizado para identificação unica do usuário.
   * @example "willianbastist"
   */
  username: string;

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
