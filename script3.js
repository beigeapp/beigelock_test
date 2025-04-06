function generateQR() {
    let passwordInput = document.getElementById("passwordInput");
    let password = parseInt(passwordInput.value);

    // Check if the password input is a 6-digit number
    if (isNaN(password) || password < 0 || password > 999999) {
        alert("Please enter a 6-digit number as the password.");
        return;
    }

    // Construct the data for the QR code
    let qrData = password;

    // Generate the QR code using a QR code generator API
    let qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrData;

    // Open the QR code in a new tab with 90% of the screen width
    let width = Math.min(window.innerWidth * 0.9, 400); // Maximum width set to 400px
    let height = width; // Square QR code
    let qrWindow = window.open(qrCodeUrl, '_blank', `width=${width}, height=${height}`);

    if (qrWindow) {
        qrWindow.document.write(`<p><style> p { font-family: Arial; } </style>QR code for BeigeLock</p><br>`);
        qrWindow.document.write(`<img src="${qrCodeUrl}" alt="QR Code">`);
        qrWindow.focus();
    } else {
        alert("Please allow pop-ups for this website to view the generated QR code.");
    }

    // Display the QR code image
    let qrImage = document.getElementById("qrImage");
    qrImage.src = qrCodeUrl;
}

