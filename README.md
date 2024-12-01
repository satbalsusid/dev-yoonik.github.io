<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tab Nabbing Test</title>
</head>
<body>
    <h1>Tab Nabbing Test</h1>
    <p>Klik tautan di bawah untuk membuka tab baru:</p>
    <a href="https://www.codepolitan.com/blog/test-moe5qo/" target="_blank" rel="noopener noreferrer" id="malicious-link">
        Open Example in New Tab
    </a>

    <script>
        // Simulasi manipulasi tab setelah link diklik
        document.getElementById('malicious-link').addEventListener('click', function (e) {
            setTimeout(() => {
                if (window.opener && !window.opener.closed) {
                    window.opener.location = "https://evil.com"; // Ganti dengan URL berbahaya
                }
            }, 2000); // Waktu jeda sebelum mengganti tab
        });
    </script>
</body>
</html>
