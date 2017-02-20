using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dive_Site_Routing.Startup))]
namespace Dive_Site_Routing
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
