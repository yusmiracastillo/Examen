Feature: Prueba de Login

  Scenario Outline: Login
    Given cargamos el navegador y vamos al sitio web Linkedin
    When el usurio ingrese su username "<usuario>" y el password "<password>"
    And el usuario presione click en el boton entrar
    Then el usuario deberia ver el mensaje "<mensaje>"

    Examples: 
      | usuario                      | password | mensaje                                                                   |
      | yusmira_castillo@hotmail.com | Yusmi134 | Hmm, thats not the right password. Please try again or request a new one. |
