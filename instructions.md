# Local HTML page as newtab in Firefox and Chrome



How to setup local html page as newtab. *Updated* for *2022*.




# Method 1: Creating an addon


## Cross-browser setup :
---

1. Create a html file named **homepage.html** any where on your drive. For this example we will save it at :<br> `C:\tools\firefox-homepage`.
   
2. Assuming you already have some experience with html/css/js, add your buttons, cards, links, search bar or anything to your heart's content. Or you can use [mine](../blob/master/LICENSE).

3. External files (js/css/svg/img) can used so it's best practice to organize your assets and scripts in indvidual folders.

4. For the browser to reconize our webpage as an addon we need to add a `manifest.json` file to our addons root folder.
   
5. Create a file named `manifest.json` and add the following lines:

        {   
            "manifest_version": 2,
            "name": "",
            "version": "0.1",

            "description": "Personal Homepage",
            
            "incognito": "spanning",
            "permissions": ["tabs"],
            "chrome_url_overrides": {
            "newtab": "homepage.html"
            },

            "browser_specific_settings": {
                "gecko": {
                    "id": "custom@extension.com"
                }
            }
        }
6. I left the `"name"` key empty for a specific reason which I will talk about in the next steps.
7.  [`"chrome_url_overrides"`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) is the key that helps us replace special pages like the bookmarks, history and newtab page with a locally stored page or external link. Read more about manifest keys [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#list_of_manifest.json_keys).

## Chrome addon:

1. Open Chrome and type `chrome://extensions`

2. Turn on **Developer mode** in the top right corner (Don't worry you can turn it off after we are done here).

3. Now click on Load Unpacked in the top left corner.

4. Then select your addon folder which in our case is `C:\tools\firefox-homepage`

5. Now the only thing that needs to be changed in `manifest.json` is to changed the `"manifest_version": 2` to `"manifest_version": 3`. Albeit it would work fine for the time being (2022) but manifest 2 will soon be depreciated in 2023.

6. Also remove the `"browser_specific_settings"` as this key is firefox specific and optional and will throw up a console error if not removed.

## Firefox addon:

1. Now this is where it gets tricky.

2. You can only temporarily load a local addon in vanilla firefox, which means your addon will be sent to brazil everytime you restart your browser.

3. To get around this we need to be using [firefox developer](https://www.mozilla.org) or the [nightly edition](https://www.mozilla.org) (which I assume majority of you don't or don't want to) or publish your addon in the firefox addon store which I also assuming you don't want to.

4. 

5. 
# Method 2: Using AutoConfig

> **Warning**: This may break in future updates as this method is a bit hacky-ish.  This only works with firefox! I am yet to find an alternative for chrome other than Method 1.

## Firefox
---

### Local HTML

1. Create a html file named **homepage.html** any where on your drive. For this example we will save it at :<br> `C:\tools\firefox-homepage`.
   
2. Assuming you already have some experience with html and css, add your buttons, cards, links, search bar or anything to your heart's content as long as everything is inline. Or you can use [mine](../blob/master/LICENSE).

3. I repeat **EVERYTHING NEEDS TO BE INLINE FOR THIS TO WORK.** All your js and css needs to be inside your html.

4. Check out to [convert](https://developer.mozilla.org/en-US/docs/) your png/jpeg images to ***Base64*** to insert them inside your html.


###  autoconfig.js

1. Create a file named **autoconfig.js** in the following folder:<br>`C:\Program Files\Mozilla Firefox\defaults\pref`. A file named *channel-prefs.js* should already exist in the folder *DON'T TOUCH IT!*.

2. Copy the code below and paste it into **autoconfig.js**. Do not remove the comment (I know some of you are itching to) in the first line `//` as autoconfig needs it to communicate :
   
        //
        pref("general.config.filename", "autoconfig.cfg");
        pref("general.config.obscure_value", 0);
        pref("general.config.sandbox_enabled", false);

3. The `"autoconfig.cfg"` is the file we are going to create in the next step.


### autoconfig.cfg

1. Create a file named **autoconfig.cfg** in the firefox installation folder<br>`C:\Program Files\Mozilla Firefox`.

2. Enter the following code below in the file:

        //  
        var {classes:Cc,interfaces:Ci,utils:Cu} = Components;  
        try {  

        Cu.import("resource:///modules/AboutNewTab.jsm");  
        var newTabURL = "file:///*enter_file_path_here*";  
        AboutNewTab.newTabURL = newTabURL;
        
        function SetFocusOnPage () {

            setTimeout(function() {
                gBrowser.selectedBrowser.focus();
            }, 0);

        }
        gBrowser.tabContainer.addEventListener("TabOpen", SetFocusOnPage, false);

        } catch(e){
            Cu.reportError(e);
        }

3. Enter the path to our previously created `index.html` file in 4th line.<br> Do not forget to turn the backwards slashes in the file path copied from the address bar into forwards slashes otherwise it will throw up an error :
   
        var newTabURL = "file:///C:/tools/firefox-homepage/homepage.html";
        
### Now restart firefox and you should see the changes 👍.
I hope mozilla adds native local file support for homepage/new tab customization in the future. You know they keepin it 💯💯💯.