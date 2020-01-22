import os


def processDir(rootname, filelist, writer):
  writer.write("const %s: Soundbyte[] = [\n" % rootname.upper())
  for filename in filelist:
     processFile(rootname, filename, writer)
  writer.write("];\n\n")


def processFile(root, name, writer):
  writer.write("\t{\n")
  writer.write("\t\tname: '%s',\n" % name[:-4].title())
  writer.write("\t\tpath: 'assets/%s/%s',\n" % (root,name))
  writer.write("\t\tloopSetting: false,\n")
  writer.write("\t\tloopText: \"Play Oonce\",\n")
  writer.write("\t\taudio: null\n")
  writer.write("\t},\n")


#outdir = ".\\src\\assets\\"
outdir = "."
outputfile = "sound-list.ts"

os.chdir(outdir)
#files = os.listdir()
#for file in files:
#  print(file)



startString = "import { Soundbyte} from '@app/classes/soundbyte';\nimport { SoundbyteArray } from '@app/classes/soundbytearray';\n\n"
SOUNDS = []

with open(outputfile, "w+") as outFile:
  outFile.write(startString)
  for root, dirs, files in os.walk('.'):
    if(root != '.'):
      processDir(root[2:], files, outFile)
      #for fname in files:
      #  print('\tFile: %s\\%s' % (root[2:], fname))
    
  outFile.write("export const SOUNDS: SoundbyteArray[] = [\n")
  for root, dirs, files in os.walk('.'):
    for dir in dirs:
      outFile.write("\t{\n")
      outFile.write("\t\tname: '%s',\n\t\tarray: %s" % (dir, dir.upper()))
      SOUNDS.append(dir.upper())
      outFile.write("\n\t},\n")
  outFile.write("];\n")






