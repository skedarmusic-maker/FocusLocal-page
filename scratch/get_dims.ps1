$shell = New-Object -ComObject Shell.Application
$folder = $shell.NameSpace('C:\Users\Skedar\Desktop\IA - SITES\GSC landingpage\public\images')
$file = $folder.ParseName('1000329384_202606191326.mp4')
$w = $folder.GetDetailsOf($file, 316)
$h = $folder.GetDetailsOf($file, 318)
$dim = $folder.GetDetailsOf($file, 31) # Alguns Windows usam índice 31 para dimensões

Write-Output "Largura (316): $w"
Write-Output "Altura (318): $h"
Write-Output "Dimensões (31): $dim"
