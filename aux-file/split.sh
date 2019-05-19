read -p "pcapng file to read: " file
PcapSplitter -f $file -m connection -o ./splitted/
