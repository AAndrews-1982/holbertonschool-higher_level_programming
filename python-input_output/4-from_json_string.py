#!/usr/bin/python3
"""
Returns an object (Python data structure)
if represented by a JSON string:

Prototype: def from_json_string(my_str):
No need to manage exceptions if JSON string doesn’t represent
an object.
"""


import json


def from_json_string(my_str):
    """Return the object represented by a JSON string"""
    obj = json.loads(my_str)
    return obj
