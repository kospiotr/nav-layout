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

Permitted combinations:

[slot] - [top|rght|bottom|left] - [size] - positions

Sizes:

nav-layout includes a number of responsive classes to style your content for different viewport widths. This table gives you an overview of the available breakpoints and the associated devices. You can adjust all breakpoints through the Customizer.

|Prefix|Size	|Breakpoints	    |Device                        |
|------|--------|-------------------|------------------------------|
|      |All 	|no breakpoint      |All devices                   |
| xs   |XSmall	|0px to 543px       |Phones portrait               |
| s    |Small	|544px to 767px	    |Phones landscape              |
| m    |Medium	|768px to 991px	    |Tablets portrait              |
| l    |Large	|992px to 1199px	|Desktops & tablets landscape  |
| xl   |Xlarge	|1200px and larger	|Large Desktops                |

Size ranges:

|Prefix|Size	|Breakpoints	    | UP        	                | DOWN        	                | BETWEEN        	                    |
|------|--------|-------------------|-------------------------------|-------------------------------|---------------------------------------|
| xs   |XSmall	|0px to 543px       | -lt-s, -lt-m, -lt-l, lt-xl    | n/a                           | n/a                                   |
| s    |Small	|544px to 767px	    | -lt-m, -lt-l, lt-xl           | -gt-xs                        | -bw-xs-m, -bw-xs-l, -bw-xs-xl         |
| m    |Medium	|768px to 991px	    | -lt-l, -lt-xl                 | -gt-s, -gt-xs                 | -bw-xs-l, -bw-xs-xl, -bw-s-l, -bw-s-xl|
| l    |Large	|992px to 1199px	| -lt-xl                        | -gt-m, -gt-s, -gt-xs          | -bw-xs-xl, -bw-s-xl, -bw-m-xl         |
| xl   |Xlarge	|1200px and larger	| n/a                           | -gt-l, -gt-m, -gt-s, -gt-xs   | n/a                                   |

CSS architecture

To avoid conflicts with other CSS frameworks, all nav-layout classes are name-spaced with the nl- prefix.

Selenium configuration:
sudo docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.0.1-aluminum