import os
import re
from pathlib import Path

def rename_files_lowercase(root_dir):
    """Recursively rename files to lowercase, excluding node_modules and hidden directories"""
    
    # Map of old names to new names for tracking changes
    renames = []
    
    for root, dirs, files in os.walk(root_dir):
        # Skip node_modules, .git, and hidden directories
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        
        for file in files:
            old_path = os.path.join(root, file)
            
            # Create new filename with lowercase
            new_file = file.lower()
            new_path = os.path.join(root, new_file)
            
            if old_path != new_path and os.path.exists(old_path):
                try:
                    os.rename(old_path, new_path)
                    renames.append((old_path, new_path))
                    print(f"Renamed: {file} -> {new_file}")
                except Exception as e:
                    print(f"Error renaming {file}: {e}")
    
    return renames

if __name__ == '__main__':
    website_dir = r"C:\Users\kerem\cfo_assistant\website"
    renames = rename_files_lowercase(website_dir)
    print(f"\nTotal files renamed: {len(renames)}")
