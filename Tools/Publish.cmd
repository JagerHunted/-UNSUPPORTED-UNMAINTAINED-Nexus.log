@echo off

echo "Checking if we are added to the repository!"

git remote remove origin
git remote add origin https://github.com/JagerHunted/Logger.git

echo "Publishing!"

git push origin master

echo "Exiting Script."
