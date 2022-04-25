package com.emt.lab2.demo.Model.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GeneralException extends RuntimeException{

    public GeneralException(String exception) {
        super(exception);
    }
}
