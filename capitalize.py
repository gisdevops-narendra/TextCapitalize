# Importing the 'sys' module to access command-line arguments
import sys

# Defining a function that takes a 'text' argument and returns its uppercase version
def capitalize_text(text):
    capitalized_text = text.upper()
    return capitalized_text

# Checking if the script is being run as the main module
if __name__ == '__main__':
    
    # Extracting the first command-line argument as 'text'
    text = sys.argv[1]
    
    # Calling the 'capitalize_text' function with 'text' as argument and storing the result in 'capitalized_text'
    capitalized_text = capitalize_text(text)
    
    # Printing the 'capitalized_text' to stdout
    print(capitalized_text)



# This script defines a function 'capitalize_text' that takes a 'text' argument and 
# returns its uppercase version. It also checks if the script is being run as the
# main module and extracts the first command-line argument as 'text'. 
# It then calls the 'capitalize_text' function with 'text' as argument and 
# stores the result in 'capitalized_text'. Finally, it prints the 'capitalized_text' 
# to stdout. This script can be used as a standalone command-line tool to capitalize text.
