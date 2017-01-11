Features: 

- simple 
- pure css 
- extensible   

All classes: 

- nl-\[-off\]-top\[-size\]
- nl-\[-off\]-right\[-size\]
- nl-\[-off\]-bottom\[-size\]
- nl-\[-off\]-left\[-size\]
- nl-opened\[-size\]
- nl-closed\[-size\]

Sizes:

nav-layout includes a number of responsive classes to style your content for different viewport widths. This table gives you an overview of the available breakpoints and the associated devices. You can adjust all breakpoints through the Customizer.

Size breakpoints:

|Prefix|Size	|Breakpoints	    |Device                        |
|------|--------|-------------------|------------------------------|
| xs   |XSmall	|0px to 543px       |Phones portrait               |
| s    |Small	|544px to 767px	    |Phones landscape              |
| m    |Medium	|768px to 991px	    |Tablets portrait              |
| l    |Large	|992px to 1199px	|Desktops & tablets landscape  |
| xl   |Xlarge	|1200px and larger	|Large Desktops                |

Size ranges:

|Prefix|Size	| Equals | Less than and equals                     | Greater than and equals                   | Between        	                    |
|------|--------|--------|------------------------------------------|-------------------------------------------|---------------------------------------|
| xs   |XSmall	| -eq-xs | -lte-xs, -lte-s, -lte-m, -lte-l, lte-xl  | -gte-xs                                   | n/a                                   |
| s    |Small	| -eq-s  | -lte-s, -lte-m, -lte-l, lte-xl           | -gte-s, -gte-xs                           | -bw-xs-m, -bw-xs-l, -bw-xs-xl         |
| m    |Medium	| -eq-m  | -lte-m, -lte-l, lte-xl                   | -gte-m, -gte-s, -gte-xs                   | -bw-xs-l, -bw-xs-xl, -bw-s-l, -bw-s-xl|
| l    |Large	| -eq-l  | -lte-l, -lte-xl                          | -gte-l, -gte-m, -gte-s, -gte-xs           | -bw-xs-xl, -bw-s-xl, -bw-m-xl         |
| xl   |Xlarge	| -eq-xl | -lte-xl                                  | -gte-xl, -gte-l, -gte-m, -gte-s, -gte-xs  | n/a                                   |

Sizes per range:

Equals:

| eq        | Size |
|-----------|------|
| -eq-xs    | xs   |
| -eq-s     | s    |
| -eq-m     | m    |
| -eq-l     | l    |
| -eq-xl    | xl   |
       

Less than and equals:                 
                 
| lte       | Size             |
|-----------|------------------|
| -lte-xs   | xs               |
| -lte-s    | xs, s            |
| -lte-m    | xs, s, m         |
| -lte-l    | xs, s, m, l      |
| -lte-xl   | xs, s, m, l, xl  |

Greater than and equals:        
                             
| gte       | Size             |
|-----------|------------------|
| -gte-xs   | xs, s, m, l, xl  |
| -gte-s    | s, m, l, xl      |
| -gte-m    | m, l, xl         |
| -gte-l    | l, xl            |
| -gte-xl   | xl               |

Between:        
                             
| bw        | Size             |
|-----------|------------------|
| -bw-xs-m  | s                |
| -bw-xs-l  | s, m             |
| -bw-xs-xl | s, m, l          |
| -bw-s-l   | m                |
| -bw-s-xl  | m, l             |
| -bw-m-xl  | l                |

Priorities:

If collision happens then following resolution has priority:

| priority  | Size              |
|-----------|-------------------|
| 1         | no size specified |
| 2         | -lte              |
| 3         | -gte              | 
| 4         | -bw               |

Given classes ```nl-left-lte-xs nl-top-lte-m nl-opened nl-closed-eq-xs```  results in:

|Prefix|Position	|Visibility|
|------|------------|----------|
| xs   |top	        |opened    |
| s    |top	        |opened    |
| m    |top	        |opened    |
| l    |left	    |opened    |
| xl   |left	    |opened    |


CSS architecture

To avoid conflicts with other CSS frameworks, all nav-layout classes are name-spaced with the nl- prefix.

Selenium configuration:
sudo docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.0.1-aluminum