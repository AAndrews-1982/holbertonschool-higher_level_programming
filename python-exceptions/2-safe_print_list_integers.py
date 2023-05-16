#!/usr/bin/python3

def safe_print_list_integers(my_list=[], x=0):
    count = 0
    for i in range(x):
        try:
            print("{:d}".format(my_list[i]), end=" ")
            count += 1
        except (ValueError, TypeError):
            continue
    print()  # Print a new line after all elements are printed
    return count if x > 0 else 0