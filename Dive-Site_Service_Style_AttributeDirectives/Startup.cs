using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dive_Site_Service_Style_AttributeDirectives.Startup))]
namespace Dive_Site_Service_Style_AttributeDirectives
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
