#!/usr/bin/python3
"""
Function to return the dictionary description with simple data structure
for JSON serialization of an object.

Prototype: def class_to_json(obj):
obj is an instance of a Class
All attributes of the obj Class are serializable: list, dictionary, string,
integer, and boolean
You are not allowed to import any module.
"""

def class_to_json(obj):
    """
    Return the dictionary description with a simple data structure
    for JSON serialization.

    Args:
        obj (object): An instance of a Class.

    Returns:
        dict: Dictionary description of the object with serializable attributes.

    """
    return obj.__dict__
