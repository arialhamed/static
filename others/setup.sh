echo Enter password \(for poop\)\:
read skeleton

sudo apt update
wget https://dl.discordapp.net/apps/linux/0.0.21/discord-0.0.21.deb
sudo apt upgrade -y
sudo apt install wine lm-sensors ffmpeg git gh asciinema adb apksigner qbittorrent hwinfo powertop powerstat fancontrol traceroute tint quadrapassel gnome-disk-utility gdebi gedit steam vlc obs-studio krita inkscape telegram-desktop kamoso kdenlive imagemagick baobab tlp tlp-rdw apktool plasma-workspace-wayland cmake qt5-qmake flatpak audacity hw-probe blender virtualbox freecad libnotify-bin python3-pip default-jre default-jdk software-properties-common gimp meshlab nmap net-tools bible-kjv docker.io acpi pv neofetch zpaq torbrowser-launcher -y
sudo apt remove ktorrent -y
sudo dpkg -i discord*.deb
sudo apt install --fix-broken
sudo dpkg -i discord*.deb
rm discord*.deb
sudo snap install pdftk zoom-client openjdk
sudo snap install --classic code
sudo snap install android-studio --classic
mkdir .local/bin
export PATH="$HOME/.local/bin:$PATH"
sudo systemctl enable tlp.service
sudo apt install python3-pyqt5.qtsvg
wget https://launcher.mojang.com/download/Minecraft.deb
sudo apt install ./Minecraft.deb
rm Minecraft.deb
pip install tensorflow orange3 matplotlib pandas keras mtcnn numpy google.colab cv2

echo 'bash_message="orange to launch Python Orange\nunified, nyp to go to /media/ari/Unified/, /media/ari/Unified/NYP\nupdate to update apt and snap\nwatchs to watch sensors\nbackup to backup both NYP and Unified to Morb & 2TB respectively\neditbash, editstart to edit bash, edit login script\nrekonsole to restart Konsole"' >> ~/.bashrc

echo 'skeleton=$skeleton' >> ~/.bashrc

## aliases
echo "alias orange='echo -e $skeleton | sudo -S python3 -m Orange.canvas --no-sandbox &'" >> ~/.bashrc
echo "alias citra='flatpak run org.citra_emu.citra'" >> ~/.bashrc
echo "alias nano='nano --tabsize=4 --constantshow --softwrap --atblanks --autoindent --smarthome --cutfromcursor'" >> ~/.bashrc
echo "alias {unified,Unified}='cd /media/ari/Unified/'" >> ~/.bashrc
echo "alias {NYP,nyp}='cd /media/ari/Unified/NYP'" >> ~/.bashrc
## echo "alias update='if echo -e $skeleton | sudo -S echo 85 | sudo tee /sys/class/power_supply/BAT0/charge_stop_threshold; then notify-send "Charge stop threshold is set to 85% by login script."; else notify-send "Charge stop threshold is NOT set." "Battery is not connected" --urgency=critical; fi; if echo -e $skeleton | sudo -S echo 75 | sudo tee /sys/class/power_supply/BAT0/charge_start_threshold; then notify-send "Charge start threshold is set to 75% by login script."; else notify-send "Charge start threshold is NOT set." "Battery is not connected" --urgency=critical; fi; if echo -e $skeleton | sudo -S apt update && sudo apt upgrade -y && sudo snap refresh; then notify-send "System apt & snap updated by login script."; else notify-send "System apt & snap was not auto-updated by login script." "Check script or settings again." --urgency=critical; fi'
echo "alias backup='zpaq a /media/ari/2TB/Backups/Unified.zpaq /media/ari/Unified && zpaq a /media/ari/Morbdrive/Backups/NYP.zpaq /media/ari/Unified/NYP/ && cp /media/ari/Morbdrive/Backups/NYP.zpaq /media/ari/2TB/Backups/NYP.zpaq'" >> ~/.bashrc
echo "alias {find100M,find100m}='find `pwd` -type f -size +100M'" >> ~/.bashrc
echo "alias watch='watch -n .5'" >> ~/.bashrc
echo "alias editbash='nano ~/.bashrc'" >> ~/.bashrc
echo "alias editstart='nano /home/ari/start.sh'" >> ~/.bashrc
echo "alias {rekonsole,rek}='(sleep .1; bash ;konsole) & exit'" >> ~/.bashrc
echo "alias poop='echo $skeleton | sudo -S'" >> ~/.bashrc
echo "alias stfu='shutdown -P 0'" >> ~/.bashrc
echo "alias starback='rm -rf /media/ari/Unified/Downloads/storage/ ; cp -r /media/ari/Unified/SteamLibrary/steamapps/common/Starbound/storage/ /media/ari/Unified/Downloads/'" >> ~/.bashrc
echo "alias clear='clear; echo -e $bash_message'" >> ~/.bashrc
echo "alias kill='f(){ kill -9 $(ps -x | grep \"$@\") ;  unset -f f; }; f'" >> ~/.bashrc
echo "echo -e '$bash_message'" >> ~/.bashrc
