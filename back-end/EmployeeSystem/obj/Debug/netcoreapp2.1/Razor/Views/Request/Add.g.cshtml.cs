#pragma checksum "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4003d429b6de5f32ce6a689d5f0956a7c10e1559"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Request_Add), @"mvc.1.0.view", @"/Views/Request/Add.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Request/Add.cshtml", typeof(AspNetCore.Views_Request_Add))]
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
#line 1 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 2 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using EmployeeSystem;

#line default
#line hidden
#line 3 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using EmployeeSystem.Models;

#line default
#line hidden
#line 4 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using EmployeeSystem.Models.AccountViewModels;

#line default
#line hidden
#line 5 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using EmployeeSystem.Models.ManageViewModels;

#line default
#line hidden
#line 6 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\_ViewImports.cshtml"
using DTOs.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4003d429b6de5f32ce6a689d5f0956a7c10e1559", @"/Views/Request/Add.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"06920ac54a437bf8d29b4ad12de81851c4499c7a", @"/Views/_ViewImports.cshtml")]
    public class Views_Request_Add : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<RequestDto>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rows", new global::Microsoft.AspNetCore.Html.HtmlString("5"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("width: 100%; border-radius: 5px;"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("placeholder", new global::Microsoft.AspNetCore.Html.HtmlString("Description ..."), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", "hidden", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Request", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Save", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.TextAreaTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_TextAreaTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.InputTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(19, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
  
    ViewData["Title"] = "Request Management";

#line default
#line hidden
            BeginContext(75, 6, true);
            WriteLiteral("\r\n<h2>");
            EndContext();
            BeginContext(82, 17, false);
#line 7 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(99, 65, true);
            WriteLiteral("</h2>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        ");
            EndContext();
            BeginContext(164, 1464, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "525086a6c56644648ac1089488d0816c", async() => {
                BeginContext(272, 85, true);
                WriteLiteral("\r\n            <hr />\r\n            <div class=\"form-group col-md-3\">\r\n                ");
                EndContext();
                BeginContext(358, 34, false);
#line 14 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.LabelFor(model => model.From));

#line default
#line hidden
                EndContext();
                BeginContext(392, 18, true);
                WriteLiteral("\r\n                ");
                EndContext();
                BeginContext(411, 80, false);
#line 15 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.TextBoxFor(model => model.From, new { @class = "form-control datepicker" }));

#line default
#line hidden
                EndContext();
                BeginContext(491, 18, true);
                WriteLiteral("\r\n                ");
                EndContext();
                BeginContext(510, 82, false);
#line 16 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.ValidationMessageFor(model => model.From, "", new { @class = "text-danger" }));

#line default
#line hidden
                EndContext();
                BeginContext(592, 85, true);
                WriteLiteral("\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                ");
                EndContext();
                BeginContext(678, 32, false);
#line 19 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.LabelFor(model => model.To));

#line default
#line hidden
                EndContext();
                BeginContext(710, 18, true);
                WriteLiteral("\r\n                ");
                EndContext();
                BeginContext(729, 78, false);
#line 20 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.TextBoxFor(model => model.To, new { @class = "form-control datepicker" }));

#line default
#line hidden
                EndContext();
                BeginContext(807, 18, true);
                WriteLiteral("\r\n                ");
                EndContext();
                BeginContext(826, 80, false);
#line 21 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.ValidationMessageFor(model => model.To, "", new { @class = "text-danger" }));

#line default
#line hidden
                EndContext();
                BeginContext(906, 85, true);
                WriteLiteral("\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                ");
                EndContext();
                BeginContext(992, 43, false);
#line 24 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.LabelFor(model => model.RequestTypeId));

#line default
#line hidden
                EndContext();
                BeginContext(1035, 18, true);
                WriteLiteral("\r\n                ");
                EndContext();
                BeginContext(1054, 135, false);
#line 25 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
           Write(Html.DropDownListFor(model => model.RequestTypeId, new SelectList(ViewBag.RequestTypes, "Id", "Name"), new { @class = "form-control" }));

#line default
#line hidden
                EndContext();
                BeginContext(1189, 85, true);
                WriteLiteral("\r\n            </div>\r\n            <div class=\"form-group col-md-9\">\r\n                ");
                EndContext();
                BeginContext(1274, 123, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("textarea", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2dd41ca609f24129b929c73b646c121a", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_TextAreaTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.TextAreaTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_TextAreaTagHelper);
#line 28 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_TextAreaTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Description);

#line default
#line hidden
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_TextAreaTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1397, 34, true);
                WriteLiteral("\r\n            </div>\r\n            ");
                EndContext();
                BeginContext(1431, 36, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("input", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ba3d40ad6d5a4e2488d9af62352ab8da", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.InputTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper.InputTypeName = (string)__tagHelperAttribute_3.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
#line 30 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.Id);

#line default
#line hidden
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_InputTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1467, 154, true);
                WriteLiteral("\r\n            <div class=\"form-group col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n            </div>\r\n        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            if (__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues == null)
            {
                throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-returnUrl", "Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper", "RouteValues"));
            }
            BeginWriteTagHelperAttribute();
#line 11 "E:\Repositories\EmployeeSystem\EmployeeSystem\EmployeeSystem\Views\Request\Add.cshtml"
                       WriteLiteral(ViewData["ReturnUrl"]);

#line default
#line hidden
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues["returnUrl"] = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-returnUrl", __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.RouteValues["returnUrl"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_4.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Controller = (string)__tagHelperAttribute_5.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_6.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1628, 20, true);
            WriteLiteral("\r\n    </div>\r\n</div>");
            EndContext();
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<RequestDto> Html { get; private set; }
    }
}
#pragma warning restore 1591