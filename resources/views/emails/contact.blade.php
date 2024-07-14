
<!-- resources/views/emails/contact.blade.php -->
<html>

<head>
    <title>Contact Form Message</title>
</head>

<body style="background-color: #f7fafc; font-family: 'Open Sans', sans-serif; margin: 0; padding: 24px;">
    <div style="max-width: 672px; margin: 0 auto; background-color: #ffffff; padding: 32px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <header style="border-bottom: 2px solid #edf2f7; margin-bottom: 16px; padding-bottom: 16px;">
            <h2 style="font-size: 24px; font-weight: 700; color: #2a4365; margin: 0;">Message from: {{ $data['name'] }}</h2>
            <div style="color: #4a5568; font-size: 14px; margin: 4px 0 0;"><span style="font-weight: 600;">Email:</span> {{ $data['email'] }}</div>
        </header>
        <section>
            <div style="color: #4a5568;font-weight: 600; margin-bottom:6px">Message</div>
            <div style="color: #1a202c; white-space: pre-wrap; line-height: 1.5;">{{ $data['message'] }}</div>
        </section>
    </div>
</body>

</html>