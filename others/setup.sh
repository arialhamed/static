echo "Ari's Ubuntu 22.04 Setup Script"
sudo apt update
sudo apt upgrade -y
sudo snap refresh
sudo apt install --no-install-recommends wine lm-sensors ffmpeg git gh asciinema adb apksigner qbittorrent hwinfo powertop powerstat fancontrol traceroute tint quadrapassel gnome-disk-utility gdebi gedit steam vlc obs-studio krita inkscape telegram-desktop kamoso kdenlive imagemagick baobab tlp tlp-rdw apktool plasma-workspace-wayland cmake qt5-qmake flatpak audacity hw-probe blender virtualbox freecad libnotify-bin python3-pip default-jre default-jdk software-properties-common gimp meshlab nmap net-tools bible-kjv docker.io acpi pv neofetch zpaq torbrowser-launcher npm fprintd libpam-fprintd w3m w3m-img xautomation r-base-core d1x-rebirth d2x-rebirth curl ca-certificates libxext-dev clang gcc python3.10-venv nomacs heif-gdk-pixbuf eog heif-thumbnailer qt6-base-dev qt6-base-private-dev libqt6svg6-dev make g++ pkg-config libavcodec-dev libavformat-dev libavutil-dev libswscale-dev libxi-dev libxrandr-dev libudev-dev libevdev-dev libsfml-dev libminiupnpc-dev libmbedtls-dev libcurl4-openssl-dev libhidapi-dev libsystemd-dev libbluetooth-dev libasound2-dev libpulse-dev libpugixml-dev libbz2-dev libzstd-dev liblzo2-dev libpng-dev libusb-1.0-0-dev gettext python3-pyqt5.qtsvg -y
sudo apt remove ktorrent -y
wget `curl -Ls -o /dev/null -w %{url_effective} "https://discord.com/api/download?platform=linux&format=deb"` && sudo dpkg -i discord*.deb && sudo apt install --fix-broken -y && sudo dpkg -i discord*.deb && rm discord*.deb
sudo snap install pdftk zoom-client openjdk
sudo snap install --classic code
sudo snap install android-studio --classic
mkdir .local/bin
export PATH="$HOME/.local/bin:$PATH"
sudo systemctl enable tlp.service
wget https://launcher.mojang.com/download/Minecraft.deb && sudo dpkg -i Minecraft.deb && rm Minecraft.deb
#pip install tensorflow orange3 matplotlib pandas keras mtcnn numpy google.colab cv2

## aliases
echo "alias orange='sudo python3 -m Orange.canvas --no-sandbox &'" >> ~/.bashrc
echo "alias citra='flatpak run org.citra_emu.citra'" >> ~/.bashrc
echo "alias {find100M,find100m}='find `pwd` -type f -size +100M'" >> ~/.bashrc
echo "alias editbash='nano ~/.bashrc'" >> ~/.bashrc
echo "alias editstart='nano ~/start.sh'" >> ~/.bashrc
echo "alias {rekonsole,rek}='(sleep .1; bash ;konsole) & exit'" >> ~/.bashrc
echo "alias stfu='shutdown -P 0'" >> ~/.bashrc
echo "alias clear='clear; echo -e $bash_message'" >> ~/.bashrc
echo "alias kill='f(){ kill -9 \$(ps -x | grep \"\$@\") ;  unset -f f; }; f'" >> ~/.bashrc
echo "alias nano='nano --tabsize=4 --constantshow --softwrap --atblanks --autoindent --smarthome --cutfromcursor'" >> ~/.bashrc
echo "alias watch='watch -n .5'" >> ~/.bashrc
echo "alias cp='rsync -aP'" >> ~/.bashrc
echo "alias mv='rsync -aP --remove-source-files'" >> ~/.bashrc
echo "alias neofetch='neofetch --ascii_distro Kubuntu'" >> ~/.bashrc
echo "alias python='python3'"

echo "echo -e '$bash_message'" >> ~/.bashrc

reboot
