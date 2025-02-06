import qrcode
from PIL import Image, ImageDraw, ImageFont
import os

def generate_qr_code(file_path, output_folder):
    """Generates a QR code with the image's numeric filename as data."""
    
    file_path = file_path.strip('"')
    file_path = os.path.normpath(file_path)

    # Extract numeric file name without extension
    file_name = os.path.basename(file_path)
    file_name_without_extension = os.path.splitext(file_name)[0]

    # Ensure the filename contains only numbers
    if not file_name_without_extension.isdigit():
        print(f"Skipping {file_name} (not purely numeric).")
        return

    # Create the QR Code using only the numeric filename as data
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=2,
    )
    qr.add_data(file_name_without_extension)  # Store only the numeric name
    qr.make(fit=True)
    qr_image = qr.make_image(fill_color="black", back_color="white")

    # Add a label below the QR Code
    font_size = 20
    label_height = font_size + 10

    qr_width, qr_height = qr_image.size
    output_image = Image.new("RGB", (qr_width, qr_height + label_height), "white")

    if qr_image.mode != "RGB":
        qr_image = qr_image.convert("RGB")

    output_image.paste(qr_image, (0, 0))

    # Draw the numeric filename as label
    draw = ImageDraw.Draw(output_image)
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except IOError:
        font = ImageFont.load_default()

    text_width = draw.textlength(file_name_without_extension, font=font)
    text_x = (qr_width - text_width) // 2
    text_y = qr_height + (label_height - font_size) // 2

    draw.text((text_x, text_y), file_name_without_extension, fill="black", font=font)

    # Save the QR code image with the same numeric filename
    output_file_name = os.path.join(output_folder, f"{file_name_without_extension}.png")
    output_image.save(output_file_name)
    print(f"QR code saved as: {output_file_name}")

def generate_qr_for_all_files_in_folder(folder_path):
    """Generates QR codes for all numeric-named images in a folder."""
    
    folder_path = folder_path.strip('"')
    folder_path = os.path.normpath(folder_path)

    if not os.path.isdir(folder_path):
        print(f"The folder path {folder_path} is not valid.")
        return

    output_folder = os.path.join(folder_path, "QR_codes")
    os.makedirs(output_folder, exist_ok=True)

    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)

        # Process only image files with numeric names
        if os.path.isfile(file_path) and file_name.lower().endswith((".jpg", ".jpeg", ".png")):
            generate_qr_code(file_path, output_folder)

# Example usage
folder_path_input = input("Enter the folder path: ")
generate_qr_for_all_files_in_folder(folder_path_input)
