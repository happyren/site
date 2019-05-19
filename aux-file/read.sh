for i in *.pcapng;
do
    tshark -r $i -q -z conv,ip | grep "^[0-9]"
done