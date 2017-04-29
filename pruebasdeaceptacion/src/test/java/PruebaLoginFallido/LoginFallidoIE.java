package PruebaLoginFallido;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginFallidoIE {
	//public WebDriver webDriver;

    WebDriver controlador;
	
    @Given("^cargamos el navegador y vamos al sitio web Linkedin$")
    public void cargamos_el_navegador_y_vamos_al_sitio_web_Linkedin() throws Throwable {
	
		System.setProperty("webdriver.IEDriverServer.exe.driver","C:\\Ejemplo_Automatizacion\\drivers\\IEDriverServer.exe");
		  controlador = new InternetExplorerDriver();
	  //  controlador.manage().window().maximize();
	        controlador.get("https://www.google.com/");
	   
	    
	   
     }

    @When("^el usurio ingrese su username \"([^\"]*)\" y el password \"([^\"]*)\"$")
    public void el_usurio_ingrese_su_username_y_el_password(String usuario, String password) throws Throwable {
       controlador.findElement(By.id("login-email")).sendKeys(usuario);  
       controlador.findElement(By.id("login-password")).sendKeys(password);   
       
    }
    
    @When("^el usuario presione click en el boton entrar$")
    public void el_usuario_presione_click_en_el_boton_entrar() throws Throwable {
       controlador.findElement(By.id("login-submit")).click();
       Thread.sleep(3000);
    }

    @Then("^el usuario deberia ver el mensaje \"([^\"]*)\"$")
    public void el_usuario_deberia_ver_el_mensaje(String mensaje) throws Throwable {
	   String resultado = controlador.findElement(By.id("session_password-login-error")).getText();
	   controlador.close();
	   Assert.assertEquals(resultado, mensaje);
    
    }

}
