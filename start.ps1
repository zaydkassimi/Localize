Write-Host "Starting LocaliZe Project..." -ForegroundColor Green
Write-Host ""
Write-Host "This script will start the project with the legacy OpenSSL provider" -ForegroundColor Yellow
Write-Host "to ensure compatibility with Node.js v20+" -ForegroundColor Yellow
Write-Host ""

$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start
