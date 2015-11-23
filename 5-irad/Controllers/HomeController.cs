using _5_irad.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _5_irad.Controllers
{
    public class HomeController : Controller
    {
        private HighscoreDBContext db = new HighscoreDBContext();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Points(Highscore highscore)
        {
            if (ModelState.IsValid)
            {
                db.Highscores.Add(highscore);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(highscore);
        }

        public ActionResult Chat()
        {
            return View();
        }
    }
}