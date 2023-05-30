#!/usr/bin/python3
"""
Function to generate Pascal's triangle up to the given number of rows.

Args:
    n (int): Number of rows for Pascal's triangle.

Returns:
    list: List of lists representing Pascal's triangle.

"""


def pascal_triangle(n):
    """
    Generate Pascal's triangle up to the given number of rows.

    Args:
        n (int): Number of rows for Pascal's triangle.

    Returns:
        list: List of lists representing Pascal's triangle.

    """

    if n <= 0:
        return []

    triangle = [[1]]  # Initialize the triangle with the first row [1]

    for i in range(1, n):
        prev_row = triangle[i - 1]
        current_row = [1]  # First element of the current row is always 1

        for j in range(1, i):
            # Calculate the value by adding the corresponding values
            # from the previous row
            value = prev_row[j - 1] + prev_row[j]
            current_row.append(value)

        current_row.append(1)
        # Last element of the current row is always 1
        triangle.append(current_row)

    return triangle
