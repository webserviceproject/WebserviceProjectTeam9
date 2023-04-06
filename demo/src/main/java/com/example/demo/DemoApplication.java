package com.example.demo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class DemoApplication {

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
	private static final Logger LOGGER = LogManager.getLogger(DemoApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("KSU helper application main()");
		LOGGER.info("Info level log message");
        LOGGER.debug("Debug level log message");
        LOGGER.error("Error level log message");       
        
	}
	
	@Bean
	   public Docket productApi() {
			
			  return new Docket(DocumentationType.SWAGGER_2).select()
			 .apis(RequestHandlerSelectors.basePackage("com.example.demo")).build();
			 
				 /* return new OpenAPI().servers(List.of(new Server()
				 * .url("https://google.com"))) .components(new Components()
				 * .addSecuritySchemes("xpto", new SecurityScheme() .type(Type.HTTP)));
				 */
	   }

}
