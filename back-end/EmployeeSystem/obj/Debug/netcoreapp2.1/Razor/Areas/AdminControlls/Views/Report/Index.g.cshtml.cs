#pragma checksum "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8a0830e3a9a7c09457490ba64ae22d2f488e5022"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_AdminControlls_Views_Report_Index), @"mvc.1.0.view", @"/Areas/AdminControlls/Views/Report/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/AdminControlls/Views/Report/Index.cshtml", typeof(AspNetCore.Areas_AdminControlls_Views_Report_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 2 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using EmployeeSystem;

#line default
#line hidden
#line 3 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using EmployeeSystem.Models;

#line default
#line hidden
#line 4 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using EmployeeSystem.Models.AccountViewModels;

#line default
#line hidden
#line 5 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using EmployeeSystem.Models.ManageViewModels;

#line default
#line hidden
#line 6 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using DTOs.Models;

#line default
#line hidden
#line 7 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\_ViewImports.cshtml"
using EmployeeSystem.Areas.AdminControlls.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8a0830e3a9a7c09457490ba64ae22d2f488e5022", @"/Areas/AdminControlls/Views/Report/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"56ae3d3ad433693a18ee57d549fbc913abddcee5", @"/Areas/AdminControlls/Views/_ViewImports.cshtml")]
    public class Areas_AdminControlls_Views_Report_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ChartDto>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "get", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Report", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "GetReport", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(17, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
  
    ViewData["Title"] = "Reports";

#line default
#line hidden
            BeginContext(62, 6, true);
            WriteLiteral("\r\n<h2>");
            EndContext();
            BeginContext(69, 17, false);
#line 7 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(86, 9, true);
            WriteLiteral("</h2>\r\n\r\n");
            EndContext();
#line 9 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
  
    var reportsType = new List<BaseDto>()
{
new BaseDto(){Id = 1, Name = "Employees by position"},
new BaseDto(){Id = 2, Name = "Project Assigned Employees"}
};

#line default
#line hidden
            BeginContext(268, 68, true);
            WriteLiteral("<div class=\"container\">\r\n    <hr />\r\n    <div class=\"row\">\r\n        ");
            EndContext();
            BeginContext(336, 535, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e697b8c9f05a484e903c26abb7bec218", async() => {
                BeginContext(402, 65, true);
                WriteLiteral("\r\n            <div class=\"form-group col-md-3\">\r\n                ");
                EndContext();
                BeginContext(468, 233, false);
#line 21 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
           Write(Html.DropDownListFor(m => m.ReportTypeId,
                                new SelectList(reportsType, "Id", "Name"),
                                " -- Select --",
                                new { @class = "form-control" }));

#line default
#line hidden
                EndContext();
                BeginContext(701, 163, true);
                WriteLiteral("\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n                <button type=\"submit\" class=\"btn btn-success\">View</button>\r\n            </div>\r\n        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Controller = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(871, 24, true);
            WriteLiteral("\r\n    </div>\r\n</div>\r\n\r\n");
            EndContext();
#line 33 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
 if (Model != null)
{
    

#line default
#line hidden
            BeginContext(924, 52, false);
#line 35 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
Write(await Html.PartialAsync("ReportChartPartial", Model));

#line default
#line hidden
            EndContext();
#line 35 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Areas\AdminControlls\Views\Report\Index.cshtml"
                                                         
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ChartDto> Html { get; private set; }
    }
}
#pragma warning restore 1591
