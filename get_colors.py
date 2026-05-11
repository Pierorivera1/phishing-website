# pyrefly: ignore [missing-import]
from PIL import Image
import collections

try:
    img = Image.open('/home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/docs/logo_unfv.jpg').convert('RGB')
    colors = img.getcolors(img.size[0] * img.size[1])
    colors.sort(reverse=True)
    for count, color in colors[:30]:
        if color[0] > 240 and color[1] > 240 and color[2] > 240:
            continue # ignore near white
        print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x} - {count} pixels")
except Exception as e:
    print("Error:", e)
