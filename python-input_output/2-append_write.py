#!/usr/bin/python3
def append_write(filename="", text=""):
    """
    Append a string to the end of a text file and return the number of characters added.
    If the file doesn't exist, it will be created.
    """
    with open(filename, mode="a", encoding="utf-8") as file:
        # Open the file in append mode ("a") to append the text at the end
        characters_added = file.write(text)
        # Write the text to the file and get the number of characters added
    return characters_added
