#!/usr/bin/python3

class Square:
    def __init__(self, size=0):
        # Check if size is an integer
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        # Check if size is greater than or equal to 0
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            # Initialize the private instance attribute __size with the provided value
            self.__size = size

