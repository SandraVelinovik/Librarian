package com.emt.lab2.demo.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
//without this line @PreAuthorize in product (add-product) won't function
@EnableGlobalMethodSecurity(securedEnabled = true,prePostEnabled = true)

public class WebConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //disable on third party apps access
        http.csrf().disable()
                //allow authorization od all requests
                .authorizeRequests()
                //select which pages will be avaliable from all users (permitAll())
                .antMatchers("/","/home","/assets/**","/register","/books","/api/**").permitAll()
                //select which pages will be avaliable just vor admins(all roles start with ROLE_XXX, but we don't write the ROLE)
                .antMatchers("/admin/**").hasRole("ADMIN")
                //for all other pages to be accessed we need authentification
                .anyRequest().authenticated()
                .and()
                .formLogin()
                //allow login page to be accessible for all users
                .loginPage("/login").permitAll()
                //if login attempt fails
                .failureUrl("/login?error=BadCredentials")
                //if login attempt is sucessfull
                .defaultSuccessUrl("/products",true)
                .and()
                .logout()
                .logoutUrl("/logout")
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessUrl("/login")
                .and()
                //access_denied is page url
                .exceptionHandling().accessDeniedPage("/access_denied");
    }
}
