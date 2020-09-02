# Getting Started

In this exercise, you will logon to your SAP Business Application Studio and get brief overview.

## Logon
After completing these steps you will know how to open your SAP Business Application Studio.

1.	Open a browser your choice (Google Chrome, Microsoft Edge, Apple Safari, etc.).

2.	Insert this code.
```
 DATA(lt_params) = request->get_form_fields(  ).
 READ TABLE lt_params REFERENCE INTO DATA(lr_params) WITH KEY name = 'cmd'.
  IF sy-subrc <> 0.
    response->set_status( i_code = 400
                     i_reason = 'Bad request').
    RETURN.
  ENDIF.
```

## Summary

Congratulations, you achieved the [Getting Started](#Getting-Started).

Continue to - [Exercise 1 - Exercise 1 Description](../ex1/README.md)
