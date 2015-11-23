<%@page session="false"%>
<%@include file="/libs/foundation/global.jsp"%>

<body>
    <cq:include path="clientcontext" resourceType="cq/personalization/components/clientcontext"/>
    <div class="bg" id="main_bg">
        <cq:include script="header.jsp"/>
        <cq:include script="content.jsp"/>
        <cq:include script="footer.jsp"/>
    </div>
    <cq:include path="timing" resourceType="foundation/components/timing"/>
    <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
</body>
