jQuery Responsive Tabs
==============

This jQuery plugin provides responsive tab functionality. The tabs transform to an accordion when it reaches a CSS breakpoint.
Check out a demo at http://jellekralt.github.io/Responsive-Tabs/demo.html

Features
=========

+ Tabs transform to accordion based on breakpoint
+ Uses javascript / jQuery for the technical tab switching (class based)
+ Uses CSS for the desktop/tablet/mobile view
+ Has callback events for the tab events
+ Tabs can be opened with URL hashes
+ Tabs can auto rotate
+ Tabs can be collapsed (optional)
+ Tabs can start collapsed based on the view (optional)
+ Cross browser compatibility (IE7+, Chrome, Firefox, Safari and Opera)
+ Multiple device support (Web, Tablet, Mobile, etc)


How to use
==========

=> Requires jQuery (minimaly jQuery 1.7.0)
=> Include jquery.responsiveTabs.js
=> Include responsive-tabs.css for the basic Tabs to Accordion switching
=> Include style.css for a basic tab/accordion theme

=> Use this HTML markup:

```html
<div id="responsiveTabsDemo">
    <ul>
        <li><a href="#tab-1"> .... </a></li>
        <li><a href="#tab-2"> .... </a></li>
        <li><a href="#tab-3"> .... </a></li>
    </ul>

    <div id="tab-1"> ....... </div>
    <div id="tab-2"> ....... </div>
    <div id="tab-3"> ....... </div>
</div>
```

=> Use this jQuery function to enable responsive tabs on the selected element:

```javascript
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});
```

Install
=======

### npm

    npm install responsive-tabs
    
### Bower

    bower install responsive-tabs
    
    
API
===

The following options are available:

### Collapsible
If set to 'true' the panels are collapsible. The values 'tabs' and 'accordion' can be used to make the panels collapsible in a specific view/state. If a tab is active and you select it again, the panel will collapse.
```javascript
collapsible: false // The panels are not collapsible
collapsible: true // The panels are collapsible
collapsible: 'tabs' // The panels are only collapsible if the view is currently tab based
collapsible: 'accordion' // The panels are only collapsible if the view is currently accordion based
```

### Start collapsed
This option defines if the first panel on load starts collapsed or not. With the values 'tabs' and 'accordion' you can specify in which view the tabs are supposed to start collapsed.

```javascript
startCollapsed: false // Do not collapse on start
startCollapsed: true // Start with the panels collapsed
startCollapsed: 'tabs' // Start with the panels collapsed if the view is currently tab based
startCollapsed: 'accordion' // Start with the panels collapsed if the view is currently accordion based
```

### Disabled tabs
An array with zero based integers that define the tabs that should be disabled

```javascript
disabled: [0,2] // Disables the first and third tab
```

### Active tab
An 0 based integer that defines the initial opened tab on load.

```javascript
active: 1 // Opens the second tab on load
```

### Rotate
This option can be used to auto rotate the tabs. The tabs will stop rotating when a tab is selected.

```javascript
rotate: false, // The tabs won't auto rotate
rotate: true, // The tabs will auto rotate from the start
```

### Animation
This option enables the animation of the panels. By default the panels will just show and hide, this option can be used to make the panels slide up and down and fade in and out.

```javascript
animation: 'fade', // The panels will fade in and out
animation: 'slide', // The panels will slide up and down
```

Callbacks
---------

### Activate
This callback is called after a tab is selected

```javascript
activate: function(){},
```

### Deactivate
This callback is called after a tab is deactivated

```javascript
deactivate: function(){},
```

### Load
This callback is called after the plugin has been loaded

```javascript
load: function(){},
```

### Activate State
This callback is called after the plugin switches from state (Tab view / Accordion view)

```javascript
activateState: function(){}
```

Methods
-------

The following methods are available:

### Activate
This method activates/opens a tab by using a zero based tab reference

```javascript
$('#responsiveTabsDemo').responsiveTabs('activate', 1); // This would open the second tab
```

### startRotation
This method start the rotation of the tabs. You can use the first argument to define the speed.
        
```javascript
$('#responsiveTabsDemo').responsiveTabs('startRotation', 1000); // This would open the second tab
```

ToDo
====
I am planning on adding these options in the future:
- Ajax panels
- Tabs that can be disabled
- Keyboard interaction
- Selection event type (for instance, mouseover)

If you have good ideas / tips about options / functionality, let me know!

Credits
=========
The idea for this plugin is based on 'Easy Responsive Tabs to Accordion' by samsono (github.com/samsono)

https://github.com/samsono/Easy-Responsive-Tabs-to-Accordion

Support
=======
If you have any questions, problems or suggestions, feel free to submit a ticket!

Buy me a beer!
==============
If you enjoy this plugin and like to make a donation you can use the button below :).

[![Buy me a beer](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=jelle%40jellekralt%2enl&lc=NL&item_name=Jelle%20Kralt&item_number=responsive%2dtabs&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted)

Licence
=======
MIT: http://jellekralt.mit-license.org/
