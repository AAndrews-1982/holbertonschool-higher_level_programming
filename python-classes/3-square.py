#!/usr/bin/python3
""" creates a class Square"""


class Square:
    """Object-class that defines a Square by size.

    Attributes:
        size: made private via leading underscores. defaults to 0
    """

    def __init__(self, size=0):
        """__init__ method documentation

        __init__ can optionally instead be documented in the class section
        do not include 'self' as an arg

        Args:
            size: made optional via "=0" defualt value.
                size of square"""

        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else
        self.__size = size

    def area(self):
        """Return the square area"""
        return self.__size ** 2
