---
title: Rooting Redmi Note 5 and Note 7 Pro
date: "2019-04-11T07:51:00.169Z"
tags: ["root", "Titanium"]
---

For those Redmi smartphone users, you might have searched queries like "Redmi Note 5 how to root with anti rollback check" before. Look no further, here's a simplified tutorial of it. 

Or proceed [here](https://miui.blog/redmi-note-5/root-bypass-arb/), if you prefer a longer and more detailed tutorial. 

**Use Case: I dropped and cracked my Redmi Note 5 screen and bought Redmi Note 7 Pro to replace it.**   

Therefore I wanted to use Titanium to back up and restore my files because it was the most comprehensive (or exhaustive?) backup app ever. 
However, it requires a rooted device - I proceed to root and back up all the desired files, contacts, messages etc. 

When I tried to root Redmi Note 7 Pro, it told me to wait for 360 hours (or 15 days) before Xiaomi allows me to unlock bootloader. I've read that the waiting time varies from 72 hours to 720 hours. What [/r/Xiaomi](https://www.reddit.com/r/Xiaomi) said: 

> The waiting time on models manufactured before 2018 is 72 hours. On models manufactured in July 2018 or later, it is 720 hours. Currently there's no known way to bypass the waiting time.

Eventually I decided on using Mi Mover to transfer files over Wifi. Some apps weren't transferred over, and the contacts and messages required multiple transfers... but it was quite reliable. 

###Prerequisites to unlock bootloader###
1. [Disable driver signature enforcement in Windows](http://en.miui.com/thread-237673-1-1.html)

2. [Install ADB and Fastboot tools with drivers on Windows](https://forum.xda-developers.com/showthread.php?t=2588979)

3. Enable OEM unlocking and USB debugging in your device

  a) Enable Developer Options in: *Settings/About Phone/MIUI version*. Click on it seven times.

  b) Now go to: *Settings/Additional settings/Developer Options* and check *OEM unlocking* and *USB debugging*.

4. Check if the bootloader is locked at *Settings/Additional settings/Developer Options/Mi Unlock status*.

###Requisites###
1. Unlock bootloader

2. Ensure the recovery ROM is in the same folder as Adb folder. shift + rightclick open command window here. Enter the following:

    * `fastboot getvar anti` 
    
    If your ARB index is 4 or greater, enter `fastboot flash antirbpass dummy.img`. 
    
    The command order your computer to flash dummy.img file to your device through the Fastboot interface. 
    
    If your ARB index is 3, skip this step and to jump to the last bullet point.

    * `fastboot flash recovery twrp-3.2.3-2-whyred.img`

    * `fastboot boot twrp-3.2.3-2-whyred.img` to boot into TWRP Recovery, if not you will boot into Redmi Note 5 custom recovery

3. Flash Magisk.zip

4. Reboot to system
