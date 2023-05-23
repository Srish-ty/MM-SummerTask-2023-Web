import cv2
import numpy as mp

img1 = cv2.imread('C:/Users/srush/Documents/GitHub/MM-Summer_task/mm-summertask-2023-web/src/images/logo_full_black.png')

img2 =  cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)

cv2.imshow('image',img2)
cv2.waitKey(0)