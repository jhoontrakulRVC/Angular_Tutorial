using System.Web;
using System.Web.Mvc;

namespace Dive_Site_Service_Style_AttributeDirectives
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
