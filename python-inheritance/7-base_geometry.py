#!/usr/bin/python3
"""
Write a class BaseGeometry

Public instance method: def area(self):
    that raises an Exception with the message
    area() is not implemented
Public instance method: def integer_validator(self, name, value):
    that validates value:
you can assume name is always a string
if value is not an integer: raise a TypeError exception,
    with the message <name> must be an integer
if value is less or equal to 0: raise a ValueError exception
    with the message <name> must be greater than 0
You are not allowed to import any module
"""


class BaseGeometry:
    """Only raises exception"""
    def area(self):
        """area method"""
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """validates ints"""
        if type(value) is not int:
            raise TypeError("{} must be an integer".format(name))
        if value <= 0:
            raise ValueError("{} must be greater than 0".format(name))
