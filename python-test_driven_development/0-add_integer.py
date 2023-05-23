#!/usr/bin/python3
"""module 0-add_integer

adds the input ints. also accepts integer floats"""


def add_integer(a, b=98):
    """tests for type to be int or float,

    then if they are and are divisible by 1, return their sum

    if they are float, cast to int.
    int(x) == floor of x in integer format
    """
 if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    elif not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")

    return int(a) + int(b)
