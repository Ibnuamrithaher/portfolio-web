Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = "$PSScriptRoot\CV_Indonesia.docx"
$tempPath = "$PSScriptRoot\temp_docx"

if (Test-Path $tempPath) { Remove-Item -Path $tempPath -Recurse -Force }
New-Item -ItemType Directory -Path $tempPath | Out-Null

[System.IO.Compression.ZipFile]::ExtractToDirectory($docxPath, $tempPath)

$xmlPath = "$tempPath\word\document.xml"
if (Test-Path $xmlPath) {
    $content = Get-Content $xmlPath -Raw
    $text = $content -replace '<[^>]+>', ' ' -replace '\s+', ' '
    Write-Output "--- EXTRACTED TEXT ---"
    Write-Output $text.Trim()
} else {
    Write-Output "Could not find document.xml"
}

Remove-Item -Path $tempPath -Recurse -Force
