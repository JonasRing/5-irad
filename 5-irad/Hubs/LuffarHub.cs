using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace _5_irad
{
    public class LuffarHub : Hub
    {
        public void Send(string name, string symbol, string message, string sendX, string sendY)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(name, symbol, message, sendX, sendY);
        }
    }
}