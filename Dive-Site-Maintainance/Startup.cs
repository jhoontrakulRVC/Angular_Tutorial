using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dive_Site_Maintainance.Startup))]
namespace Dive_Site_Maintainance
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
