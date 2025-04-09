import os
import random

def convert_and_categorize_files_in_img_folder():
    # Specify the folder name
    folder = "img"

    # Ensure the folder exists
    if not os.path.exists(folder):
        print(f"The folder '{folder}' does not exist.")
        return

    # Initialize arrays for each category
    landscaping = []
    hardscaping = []
    rooftops_and_courtyards = []
    water_features = []
    custom_woodwork = []
    drainage = []
    general_gallery = []

    # Supported image file extensions
    supported_extensions = (".jpg", ".jpeg", ".png")

    # Iterate through all the files in the folder
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)

        # Skip directories
        if os.path.isdir(file_path):
            continue

        # Check if the file is an image
        if filename.lower().endswith(supported_extensions):
            # Add to general gallery
            general_gallery.append(filename)

            # Categorize based on characters in the name
            if 'L' in filename:
                landscaping.append(filename)
            if 'H' in filename:
                hardscaping.append(filename)
            if 'R' in filename:
                rooftops_and_courtyards.append(filename)
            if 'A' in filename:
                water_features.append(filename)
            if 'O' in filename:
                custom_woodwork.append(filename)
            if 'D' in filename:
                drainage.append(filename)

    random.shuffle(general_gallery)

    # Print categorized results with double quotes
    print("Landscaping:", str(landscaping).replace("'", '"'))
    print("\n")
    print("Hardscaping:", str(hardscaping).replace("'", '"'))
    print("\n")
    print("Rooftops & Courtyards:", str(rooftops_and_courtyards).replace("'", '"'))
    print("\n")
    print("Water Features:", str(water_features).replace("'", '"'))
    print("\n")
    print("Custom Woodwork:", str(custom_woodwork).replace("'", '"'))
    print("\n")
    print("Drainage:", str(drainage).replace("'", '"'))
    print("\n")
    print("General Gallery:", str(general_gallery).replace("'", '"'))

if __name__ == "__main__":
    convert_and_categorize_files_in_img_folder()