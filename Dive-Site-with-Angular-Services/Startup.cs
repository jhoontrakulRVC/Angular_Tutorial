using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Dive_Site_with_Angular_Services.Startup))]
namespace Dive_Site_with_Angular_Services
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
