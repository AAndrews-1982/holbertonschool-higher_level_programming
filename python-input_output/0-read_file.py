#!/usr/bin/env
def read_file(filename=""):
    """Read a text file and print its contents to stdout"""
    with open(filename, encoding="utf-8") as file:
        for line in file:
            print(line, end="")
