import qrcode

# Data to encode
data = "https://slubbp.github.io/informacje/"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,  # controls the size of the QR code
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data
qr.add_data(data)
qr.make(fit=True)

# Create an image
img = qr.make_image(back_color=(233, 223, 184), fill_color=(0, 0, 0))

# Save the image
img.save("qrcode.png")