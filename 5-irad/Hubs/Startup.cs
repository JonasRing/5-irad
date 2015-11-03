using Owin;
using Microsoft.Owin;
[assembly: OwinStartup(typeof(_5_irad.Startup))]
namespace _5_irad
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
    }
}