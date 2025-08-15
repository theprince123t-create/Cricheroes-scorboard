<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Live Score Overlay</title>
<style>
  body { margin: 0; background: transparent; }
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
</head>
<body>
<script>
  // URL से match ID लेना
  const params = new URLSearchParams(window.location.search);
  const matchId = params.get("match") || "18709413"; // default ID

  // Iframe बनाना
  document.write(`
    <iframe src="https://cricheroes.in/live-video-scorecard-customize/${matchId}"></iframe>
  `);
</script>
</body>
</html>
