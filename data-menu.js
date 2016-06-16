var itemStylesNames=["Top Item","Disabled Item","Border Item",];
var menuStylesNames=["Top Menu",];

//--- Common
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var smViewType=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="link";
var blankImage="images/blank.gif";

//--- Dimensions
var menuWidth="";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="10";
var posY="10";
var topDX=-2;
var topDY=-2;
var DX=-4;
var DY=-3;

//--- Font
var fontStyle="bold 13px Arial";
var fontColor=["#000000","#FFFFFF"];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="";
var menuBorderWidth=0;
var menuBorderStyle="solid";

//--- Item Appearance
var itemBackColor=["",""];
var itemBackImage=["",""];
var itemBorderWidth=0;
var itemBorderColor=["",""];
var itemBorderStyle=["solid","solid"];
var itemSpacing=0;
var itemPadding="3";
var itemAlignTop="left";
var itemAlign="left";
var subMenuAlign="";

//--- Icons
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=20;
var iconHeight=16;
var arrowWidth=12;
var arrowHeight=10;
var arrowImageMain=["",""];
var arrowImageSub=["images/arr_mac_silver.gif","images/arr_mac_white.gif"];

//--- Separators
var separatorImage="images/sep_mac.gif";
var separatorWidth="100%";
var separatorHeight="9";
var separatorAlignment="left";
var separatorVImage="";
var separatorVWidth="3";
var separatorVHeight="100%";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="85";
var transition=24;
var transOptions="";
var transDuration=350;
var transDuration2=200;
var shadowLen=4;
var shadowColor="#B1B1B1";
var shadowTop=1;

//--- CSS Support (CSS-based Menu)
var cssStyle=1;
var cssSubmenu="submenumac";
var cssItem=["item1mac","item2mac"];
var cssItemText=["text1mac","text2mac"];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var pathPrefix_img="";
var pathPrefix_link="";
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var smHideOnClick=1;
var dm_writeAll=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;

//--- Dynamic Menu
var dynamic=0;

//--- Keystrokes Support
var keystrokes=1;
var dm_focus=1;
var dm_actKey=113;

var itemStyles = [
    ["CSS=topitem1mac,topitem2mac","CSSText=toptext1mac,toptext2mac"],
    ["CSSText=textdis1mac,textdis1mac"],
    ["CSS=borderitem1mac,borderitem1mac","CSSText=bordertext1mac,bordertext1mac"],
];
var menuStyles = [
    ["itemSpacing=0","itemPadding=0","CSS=topsubmenumac"],
];

var menuItems = [

    ["<img src='images/mac_pic1.gif' width=16 height=16' align=left> <img src='images/mac_pic2.gif' width=16 height=16' align=left> <img src='images/mac_pic3.gif' width=16 height=16' align=left>","", , , , "_", "0", "0", , ],
    ["Home","index.html", , , , , "0", , , ],
    ["Description","about.html", , , , , "0", , , ],
        ["|Textbook","about.html#textbook", , , , , , , , ],
        ["|-","", , , , , , , , ],
        ["|Grading","about.html#grading", , , , , , , , ],
        ["|Reading Summaries","about.html#summaries", , , , , , , , ],
        ["|Scribe Duties","about.html#scribe", , , , , , , , ],
        ["|Homeworks","about.html#homeworks", , , , , , , , ],
        ["|Final Project","about.html#project", , , , , , , , ],
        ["|-","", , , , , , , , ],
        ["|Collaboration Policy","about.html#collaboration", , , , , , , , ],
        ["|Late Policy","about.html#late", , , , , , , , ],
        ["|Regrade Policy","about.html#regrade", , , , , , , , ],
        ["|-","", , , , , , , , ],
        ["|Auditing","about.html#auditing", , , , , , , , ],
        ["|Note to People Outside CMU","about.html#non-cmu", , , , , , , , ],
    ["People","people.html", , , , , "0", , , ],
    ["Lectures","lecture.html", , , , , "0", , , ],
    ["Recitations","recitation.html", , , , , "0", , , ],
    ["Homework","homework.html", , , , , "0", , , ],
        //["|Homework 1","homework.html#hw1", , , , , , , , ],
        //["|Homework 2","homework.html#hw1", , , , , , , , ],
        //["|Homework 3","homework.html#hw1", , , , , , , , ],
        //["|Homework 4","homework.html#hw1", , , , , , , , ],
    ["Project","project.html", , , , , "0", , , ],
    ["Projects (2014)","project_2014.html", , , , , "0", , , ],
    ["Previous","previous-pages.html", , , , , "0", , , ],
];

dm_init();
