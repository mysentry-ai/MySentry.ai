import os
from PIL import Image

# Define source directory and target widths
SOURCE_DIR = '/home/ubuntu/mysentry-website/client/public/images'
TARGET_WIDTHS = [480, 800]  # Mobile and Tablet widths

def resize_image(file_path):
    try:
        with Image.open(file_path) as img:
            # Skip if image is too small or not a standard format
            if img.width < 480 or img.format not in ['JPEG', 'PNG', 'WEBP']:
                return

            filename, ext = os.path.splitext(file_path)
            
            for width in TARGET_WIDTHS:
                if img.width > width:
                    # Calculate new height to maintain aspect ratio
                    height = int((width / img.width) * img.height)
                    resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
                    
                    # Save resized image with new suffix
                    new_filename = f"{filename}-{width}w{ext}"
                    resized_img.save(new_filename)
                    print(f"Generated: {new_filename}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    for root, dirs, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                file_path = os.path.join(root, file)
                # Skip already resized images to avoid duplication
                if any(f"-{w}w" in file for w in TARGET_WIDTHS):
                    continue
                resize_image(file_path)

if __name__ == "__main__":
    main()
