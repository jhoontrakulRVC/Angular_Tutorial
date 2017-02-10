using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular04.Startup))]
namespace Angular04
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
