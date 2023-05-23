#!/usr/bin/python3
"""Module that adds two integers.

This module handles the addition of two integer or float numbers. If either of them is a float, it will show as an integer.
If either of them is not a number, a TypeError is raised.
"""


def add_integer(a, b=98):
    """Adds two integers.

    The function adds two integer or float numbers.
    If any of them is a float, it is cast to an integer before the
    addition.

    Args:
        a: The first number. Must be an integer or a float.
        b: The second number. Must be an integer or a float.

    Returns:
        The sum of a and b.

    Raises:
        TypeError: If a or b are not integers or floats.
    """
 if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    elif not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")

    return int(a) + int(b)
