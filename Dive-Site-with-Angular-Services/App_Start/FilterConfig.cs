using System.Web;
using System.Web.Mvc;

namespace Dive_Site_with_Angular_Services
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
