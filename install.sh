#!/bin/bash
# bash <(curl -s https://raw.githubusercontent.com/zorvios/zorvios.github.io/master/install.sh)
anbox() { 
wget https://github.com/zorvios/zorvios.github.io/raw/master/anbox_0.0.1-0_amd64.deb -O anbox.deb
sudo dpkg -i anbox.deb
rm anbox.deb
}
dkms() {
wget http://ppa.launchpad.net/morphis/anbox-support/ubuntu/pool/main/a/anbox-modules/anbox-modules-dkms_13_all.deb -O anbox-dkms.deb
sudo dpkg -i anbox-dkms.deb
rm anbox-dkms.deb
sudo modprobe ashmem_linux
sudo modprobe binder_linux
}
img() {
wget https://build.anbox.io/android-images/2018/07/19/android_amd64.img -O android.img
sudo mv android.img /var/lib/anbox/
sudo systemctl start anbox-container-manager.service
}
adb() {
sudo apt install -y adb     
}

set -e
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
trap 'echo "\"${last_command}\" command filed with exit code $?."' EXIT

sudo true
if ! uname --kernel-release | grep -q xanmod ; then  dkms ;fi
anbox
img
adb

read -p "----- press enter to exit -----"
