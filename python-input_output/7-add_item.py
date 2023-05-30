#!/usr/bin/python3
"""
Script to add arguments to a Python list and save them to a file:

You must use the function save_to_json_file
from 5-save_to_json_file.py

You must use the function load_from_json_file
from 6-load_from_json_file.py

The list must be saved as a JSON representation
in a file named add_item.json
If the file doesn’t exist, it should be created
"""


import sys
from os import path
from load_from_json_file import load_from_json_file
from save_to_json_file import save_to_json_file


def add_arguments_to_list(args, filename):
    """Add arguments to a Python list and save them to a file"""
    if path.exists(filename):
        my_list = load_from_json_file(filename)
    else:
        my_list = []
    
    my_list.extend(args)
    
    save_to_json_file(my_list, filename)


if __name__ == '__main__':
    args = sys.argv[1:]
    filename = "add_item.json"
    add_arguments_to_list(args, filename)
