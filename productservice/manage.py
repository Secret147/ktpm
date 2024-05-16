#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'productservice.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project_name.settings')
    from django.core.management import execute_from_command_line
    if len(sys.argv) == 1:
        sys.argv.append('runserver')
        sys.argv.append('8001')  # Default port
    
    execute_from_command_line(sys.argv)
