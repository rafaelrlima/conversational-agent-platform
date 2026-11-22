$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)

$backendPath = Join-Path $projectRoot "backend"
$frontendPath = Join-Path $projectRoot "frontend\cap-frontend"

Write-Host ""
Write-Host "Starting Conversational Agent Platform..."
Write-Host ""

# Backend

Start-Process powershell `
    -ArgumentList @(
        '-NoExit',
        '-Command',
        @"
`$host.UI.RawUI.WindowTitle = 'CAP - Backend'

cd '$backendPath'

.\.venv\Scripts\Activate.ps1

uvicorn main:app --reload
"@
    )

# Frontend

Start-Process powershell `
    -ArgumentList @(
        '-NoExit',
        '-Command',
        @"
`$host.UI.RawUI.WindowTitle = 'CAP - Frontend'

cd '$frontendPath'

npm start
"@
    )

Write-Host "Backend started"
Write-Host "Frontend started"
Write-Host ""