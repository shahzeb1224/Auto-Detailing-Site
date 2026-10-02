import os
from PIL import Image

output_dir = r"src\assets\expert-auto"
os.makedirs(output_dir, exist_ok=True)

# 1. Load raw studio photo
raw_studio_path = "google_photo_raw.jpg"
im_studio = Image.open(raw_studio_path)
W, H = im_studio.size
print(f"Studio raw size: {W}x{H}")

# 2. Load sign photo
raw_sign_path = r"C:/Users/KHAN/.gemini/antigravity/brain/07266271-37d1-40a2-9380-def872ea79df/.user_uploaded/media_1790956348800.png"
im_sign = Image.open(raw_sign_path)
sW, sH = im_sign.size
print(f"Sign raw size: {sW}x{sH}")

# Clean crop of the sign (remove the top-left Google Photos box overlay)
sign_crop = im_sign.crop((35, 52, sW - 15, sH - 10))
sign_crop.save(os.path.join(output_dir, "shop-sign.png"), "PNG", optimize=True)
sign_crop.convert('RGB').save(os.path.join(output_dir, "gallery-03.jpg"), "JPEG", quality=95, optimize=True)
print("Saved shop-sign.png and gallery-03.jpg")

# 3. Hero image: cinematic landscape crop capturing hex lights + car hood + front
# Center horizontally, include lights down to bumper
hero_box = (0, int(H * 0.12), W, int(H * 0.88))
hero_img = im_studio.crop(hero_box)
# Resize to a crisp 2000x1250
hero_img.thumbnail((2200, 1400), Image.Resampling.LANCZOS)
hero_img.save(os.path.join(output_dir, "hero.jpg"), "JPEG", quality=90, optimize=True)
print("Saved hero.jpg")

# 4. Full studio bay
studio_full = im_studio.copy()
studio_full.thumbnail((1600, 2133), Image.Resampling.LANCZOS)
studio_full.save(os.path.join(output_dir, "studio-bay.jpg"), "JPEG", quality=90, optimize=True)
studio_full.save(os.path.join(output_dir, "gallery-01.jpg"), "JPEG", quality=90, optimize=True)
print("Saved studio-bay.jpg and gallery-01.jpg")

# 5. Gallery 02: Close-up front grille, GR emblem, bonnet reflection
# (W: 3024, H: 4032)
# Grille and hood area: x from 0.15*W to 0.85*W, y from 0.45*H to 0.95*H
grille_box = (int(W * 0.10), int(H * 0.46), int(W * 0.90), int(H * 0.98))
grille_crop = im_studio.crop(grille_box)
grille_crop.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
grille_crop.save(os.path.join(output_dir, "gallery-02.jpg"), "JPEG", quality=90, optimize=True)
print("Saved gallery-02.jpg")

# 6. Gallery 04: Side profile, open door & detailing craftsmanship
door_box = (0, int(H * 0.42), int(W * 0.55), int(H * 0.88))
door_crop = im_studio.crop(door_box)
door_crop.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
door_crop.save(os.path.join(output_dir, "gallery-04.jpg"), "JPEG", quality=90, optimize=True)
print("Saved gallery-04.jpg")

# 7. Gallery 05: Overhead Hexagonal LED Detailing Array
lights_box = (0, 0, W, int(H * 0.48))
lights_crop = im_studio.crop(lights_box)
lights_crop.thumbnail((1600, 900), Image.Resampling.LANCZOS)
lights_crop.save(os.path.join(output_dir, "gallery-05.jpg"), "JPEG", quality=90, optimize=True)
print("Saved gallery-05.jpg")

# 8. Featured Bay: Editorial side-by-side asset
featured_box = (int(W * 0.05), int(H * 0.15), int(W * 0.95), int(H * 0.92))
featured_crop = im_studio.crop(featured_box)
featured_crop.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
featured_crop.save(os.path.join(output_dir, "featured-bay.jpg"), "JPEG", quality=90, optimize=True)
print("Saved featured-bay.jpg")

# 9. Location map
if os.path.exists("location_static_map.png"):
    map_im = Image.open("location_static_map.png")
    map_im.save(os.path.join(output_dir, "map-location.png"), "PNG")
    print("Saved map-location.png")

print("All actual Google Maps assets processed and saved successfully!")
