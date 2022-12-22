#!/bin/bash


func_checkStatus(){
    if [ $? -eq 0 ]
    then
        echo "---Command $1 done successfully---"
    else
        echo "---fail command $1---"
        exit 1
    fi
}

func_checkNPM(){
    npm -v
    if [ $? -eq 0 ]
    then
        echo "NPM installed"
    else    
        echo "NPM did not install"
        cd ~
        curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
        func_checkStatus "Install node 16.16"
        sudo bash nodesource_setup.sh
        sudo apt install nodejs
        func_checkStatus "install nodejs"
        sudo apt install npm
    fi
}

func_checkGit(){
    git -v
    if [ $? -eq 0 ]
    then
        echo "Git installed"
    else   
        echo "Git did not install"
        sudo apt install -y git
        func_checkStatus "install git"
    fi
}

echo "---Starting deploy---"
pm2 kill
sudo apt update
rm -Rf project
mkdir project

echo "Start installing GIT"
func_checkGit
func_checkStatus "Git install"

echo "Start clonning project"
git clone https://github.com/AlexDDK/ArmoTestTask.git project
func_checkStatus "Git clone"


func_checkNPM
func_checkStatus "check npm"


cd project
npm i
npm run build
cd server
npm i
npm i pm2 -g
cp -r ~/project/dist/. ~/project/server/build
pm2 start index.js
