import os, sys

for i in [x for x in os.listdir() if sys.argv[1] in x]:
	os.system(f"cvlc \"{i}\" &")
