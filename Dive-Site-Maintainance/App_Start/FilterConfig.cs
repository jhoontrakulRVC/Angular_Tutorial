using System.Web;
using System.Web.Mvc;

namespace Dive_Site_Maintainance
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
