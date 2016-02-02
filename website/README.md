
                                                                 ..
                    +OO                                        .,77777777777
       . ..     . . +OO    . .                         ... .   .?777=.777.77:.
    .ZOOOOO8. .OOOOO$OO .IOOOOOZ  .OOOOOO$  +OOOOOZ   OOOOOO+  .?7..... ......
    OO$  .OOO OOZ.  8OO 8O?. .OO~.OO=  .OO.,OO  .+OO 7OO  .OO$ .?777.I77.~77:.
    OO.   ~OO OO.   =OO OOOOOOOO8.OO       OOOOOOOOO.OOOOOOOOO .?77~.77?.777:.
    OO~. .7OO.OO?   $OO OO:.  . . OO    OO.IOO   ..  8O$    .   ...........7:
    $OO=.,OO~ 7OOI.,OOO IOO~..OO. OOO,.7OO .OO+..ZOO ,OO,.:OO= .?7=.77I.7777:.
    ..ZOOOZ.  ..OOOO~OO  .OOOO$.   .OOOO=.  .+OOOO..  .$OOOO    .7777777777I
                                                                 .         .
   .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.


Odecee Home Page and global elements

- Header
    Logo
    Dynamic links
    Meganav (More link) - do it static for first version
    Join Team
    Contact Us
- Hero
    Background HTML5 video
    Heading text
    Subtext (optional)
    Video popup (optional) - separate component
- Content Section
    *Heading text
    *Background image (optional)
    *Background colour (default white)
    *Text colour (default black)
    *Text
- Column Control (we can borrow the AEM one and optimise with our markup)
- Content Block
    Image (optional)
    Heading text
    Text
    Text colour (default black)
    Colour (default white)
    Link (optional)
    Make title link
    Hide link
    Content mode (simple or styled)
- Footer
    Copyright text
    Contact Us
    Address
    Social buttons

--------------------------


DEPENDENCIES




# Sample AEM project template

This is a project template for AEM-based applications. It is intended as a best-practice set of examples as well as a potential starting point to develop your own functionality.

## Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps
* ui.tests: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* ui.launcher: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution

## How to build


!!! IMPORTANT !!! 

First you need to install the hotfixes required to odecee project, the following command with Maven 3:

    mvn clean install -PautoInstallHotfixes
    
Or to deploy it to a publish instance, run
    
   mvn clean install -PautoInstallHotfixesPublish

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Testing

There are three levels of testing contained in the project:

* unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

* server-side integration tests: this allows to run unit-like tests in the AEM-environment, ie on the AEM server. To test, execute:

    mvn clean integration-test -PintegrationTests

* client-side Hobbes.js tests: JavaScript-based browser-side tests that verify browser-side behavior. To test:

    in the browser, open the page in 'Developer mode', open the left panel and switch to the 'Tests' tab and find the generated 'MyName Tests' and run them.


## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
