#AEM HealthCheck#

As AEM doesn't come with an ELB\-compatible health check service OOTB Odecee has built one that will be used by the AEM Accelerator\.

###Background###

AEM starting with version 6\.1 comes with a number of JMX based health checks that allow for administrators to monitor the system\. There are convenient views built on top of these services that are available via the administrative console of AEM ([http://localhost:4502/libs/granite/operations/content/healthreports\.html](http://localhost:4502/libs/granite/operations/content/healthreports\.html) \- replace localhost with URL/IP of instance)\. The problem with these tools is that they are not suitable for continuous monitoring or in a situation where auto\-healing is required due to the fact that they are not:

+ Resolvable via a public non\-password protected URL

+ The JMX services are not accessible via HTTP

+ They are not accessible via the HEAD HTTP method

In order to resolve this issue and provide an efficient monitoring tool for automated, continuous monitoring of the AEM instances as part of AEM accelerator we are providing a custom wrapper over a set of predefined JMX services that is serving HTTP HEAD requests (as well as HTTP GET)\.

The code is maintained as part of the odecee\-aem repository here: [https://stash\.odecee\.com\.au/projects/AEM/repos/odecee/browse](https://stash\.odecee\.com\.au/projects/AEM/repos/odecee/browse)

###Accessing the health check service###

**The health check should be accessed directly via the AEM instance and NOT via a dispatcher\. Accessing the health check via a dispatcher does not guarantee that you will independently check a single instance\.**

**
**The health check service can be access at the following url "/bin/system/healthcheck"\. No additional parameters or attributes are required\.

####Accessing via a HTTP HEAD request####

When issuing a HEAD request the response will be a body\-less response with either an HTTP\.OK (200) or HTTP\.BAD\_REQUEST (400) status

####Accessing via a HTTP GET request####

When issuing a GET request the response will be a response with a status info per MBean with either an HTTP\.OK (200) or HTTP\.BAD\_REQUEST (400) status\.

###Before you begin###

There are a few AEM specific solution design requirements that are important to understand as part of the health check implementation\.

####Administrative user provisioning####

As part of the security design changes in AEM 6 and further in AEM 6\.1 it is no longer possible to use a blanket administrative login to the JCR repository to access secure information\. An example implementation that reflects this pattern can be found here: [http://www\.wemblog\.com/2014/08/how\-to\-use\-sessions\-and\-resource\.html](http://www\.wemblog\.com/2014/08/how\-to\-use\-sessions\-and\-resource\.html) and the official documentation is located here: [http://sling\.apache\.org/documentation/the\-sling\-engine/service\-authentication\.html](http://sling\.apache\.org/documentation/the\-sling\-engine/service\-authentication\.html)

Currently AEM does not offer a system user that has access to read the MBean information for the healthcheck JMX services\. As such a new system user has to be created and configured to access this information\. This user is provided as part of the health check codebase\.

As these users are not intended to login to the AEM product they are not allowed to have a password set (which prevents them from authenticating) and are only meant to be used in the context of obtaining a Session to the JCR\.

####Discrepancy between Author and Publish instances####

One of the MBeans that we base the health check report on, the request report gives out false negatives on an Author instance as the response times on Author instances are generally much slower than publisher as they are often POST requests (rather then the typical GET requests on a Publisher)\. Due to this the health check overall status for an author instance ignores the reporting from this service\.

###Installation###

The health check service is provided as an installable package via S3\. The package must be installed as part of the AEM AMI fabrication process\. There is no configuration required to complete the installation\.

###Updates to the implementation###

To update the code of the health check service:

1. Checkout the code base: [https://stash.odecee.com.au/projects/AEM/repos/odecee/browse/healthcheck](https://stash.odecee.com.au/projects/AEM/repos/odecee/browse/healthcheck)

2. Make the necessary changes

3. Commit the changes and create a pull request

4. Once the changes are merged tag a release

5. Build a package

6. Deploy to S3

**TODO**: Automate the deploy to S3 using Bamboo\.

 

 
