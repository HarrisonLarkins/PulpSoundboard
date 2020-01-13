import os

outdir = ".\\src\\assets\\"
outputfile = "generateTest.txt"

os.chdir(outdir)
files = os.listdir()
for file in files:
  print(file)


startString = "import { Soundbyte} from '@app/classes/soundbyte';\nimport { SoundbyteArray } from '@app/classes/soundbytearray';\n"

with open(outputfile, "w+") as outFile:
  outFile.write(startString)
