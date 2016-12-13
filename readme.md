Features: 

- simple 
- pure css 
- extensible   

All classess: 

- nl-\[slot\]-top\[-size\]
- nl-\[slot\]-right\[-size\]
- nl-\[slot\]-bottom\[-size\]
- nl-\[slot\]-left\[-size\]
- nl-\[slot\]-off\[-size\]
- nl-\[slot\]-closed\[-size\]
- nl-\[slot\]-collapsed\[-size\]

Sizes:

nav-layout includes a number of responsive classes to style your content for different viewport widths. This table gives you an overview of the available breakpoints and the associated devices. You can adjust all breakpoints through the Customizer.

|Prefix|Size	|Breakpoints	    |Device                        |
|------|--------|-------------------|------------------------------|
|      |All 	|                   |                              |
| xs   |Mini	|up to 479px	    |Phones portrait               |
| s    |Small	|480px to 767px	    |Phones landscape              |
| m    |Medium	|768px to 959px	    |Tablets portrait              |
| l    |Large	|960px to 1199px	|Desktops & tablets landscape  |
| xl   |Xlarge	|1200px and larger	|Large Desktops                |

CSS architecture

To avoid conflicts with other CSS frameworks, all nav-layout classes are name-spaced with the nl- prefix.

Selenium configuration:
sudo docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.0.1-aluminum