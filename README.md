# Removing the Metro Logo from WMATA's 'Next Train' Page

This removes the large Metro logo from the top of WMATA [Next Train](https://www.wmata.com/js/nexttrain/nexttrain.html#A01,C01|Metro%20Center) page, leaving more room to display train information. 

| Before | After |
|-----|-----|
|     <img src="https://user-images.githubusercontent.com/125122551/224526686-dd682436-f0f7-48b9-ba4b-76364f25b3c6.jpg" alt="'Before' screenshot with Metro logo" width="300">     |     <img src="https://user-images.githubusercontent.com/125122551/224526687-4f9b4aa2-dc3f-402c-a4ab-c229eed175d8.jpg" alt="'After' screenshot without Metro logo" width="300">     |

# How To
- Install the Firefox nightly browser on your phone, using the Google Play store. (Firefox Nightly isn't available on iPhone.)
- Open the browser, select the menu button represented by three vertical dots, and at the end of the menu options select 'Settings'.
- At or near the end of the Settings menu, select 'About Firefox Nightly'.
- Tap the Firefox Nightly logo five times until the “Debug menu enabled” notification appears.
- Navigate back to Settings and in the Advanced section, select 'Add-ons'.
- Enable 'Tampermonkey' by selecting the '+' button and agreeing to add it.
- Select 'Tampermonkey' and select 'Settings'.
- Select the tab with the '+' button to open the Tampermonkey script editor
- Open a separate tab in Firefox and navigate to WMATA_Logo.js file in this repository
- Copy the contents of the file.
- Return to the tab with the Tampermonkey script editor and paste the contents, overwriting anything already in the editor.
