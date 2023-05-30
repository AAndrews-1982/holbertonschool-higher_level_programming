#!/usr/bin/python3
"""
Class to define a student.

Public instance attributes:
- first_name
- last_name
- age

Instantiation with first_name, last_name, and age:
def __init__(self, first_name, last_name, age)

Public methods: def to_json(self, attrs=None):
Retrieves a dictionary representation of a Student instance.
def reload_from_json(self, json):
Replaces all attributes of the Student instance.
"""


class Student:
    """
    A class that defines a student.
    """

    def __init__(self, first_name, last_name, age):
        """
        Initialize a Student instance with first_name, last_name, and age.

        Args: first_name (str): The first name of the student.
              last_name (str): The last name of the student.
              age (int): The age of the student.

        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """
        Retrieves a dictionary representation of a Student instance.

        Args: attrs (list): List of attribute names to be retrieved (optional).

        Returns: dict: A dictionary containing the attribute
        names and values of the Student instance.

        """
        if attrs is None:
            return self.__dict__
        else:
            return {attr: getattr(self, attr) for attr in attrs if hasattr(self, attr)}

    def reload_from_json(self, json):
        """
        Replaces all attributes of the Student instance.

        Args: json (dict): A dictionary representing the new
        attribute values of the Student instance.

        """
        self.__dict__.clear()
        self.__dict__.update(json)
