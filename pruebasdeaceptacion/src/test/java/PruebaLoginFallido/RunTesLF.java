package PruebaLoginFallido;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (features = "features",
				 name= {""},
				 glue = { "PruebaLoginFallidoIE" },
				 plugin = { "html:reportes/cucumber-html-report" })
public class RunTesLF {

	
}