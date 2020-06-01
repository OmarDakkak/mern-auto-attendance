import os  # accessing the os functions
import check_camera
import Capture_Image
import Train_Image
import Recognize
import sys, getopt




Capture_Image.takeImages(sys.argv[1:])

