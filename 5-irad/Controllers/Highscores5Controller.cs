using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using _5_irad.Models;

namespace _5_irad.Controllers
{
    public class Highscores5Controller : Controller
    {
        private HighscoreDBContext db = new HighscoreDBContext();

        // GET: Highscores5
        public ActionResult Index()
        {
            return View(db.Highscores.ToList());
        }

        // GET: Highscores5/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Highscore highscore = db.Highscores.Find(id);
            if (highscore == null)
            {
                return HttpNotFound();
            }
            return View(highscore);
        }

        // GET: Highscores5/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Highscores5/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name,Wins,Points")] Highscore highscore)
        {
            if (ModelState.IsValid)
            {
                db.Highscores.Add(highscore);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(highscore);
        }

        // GET: Highscores5/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Highscore highscore = db.Highscores.Find(id);
            if (highscore == null)
            {
                return HttpNotFound();
            }
            return View(highscore);
        }

        // POST: Highscores5/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name,Wins,Points")] Highscore highscore)
        {
            if (ModelState.IsValid)
            {
                db.Entry(highscore).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(highscore);
        }

        // GET: Highscores5/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Highscore highscore = db.Highscores.Find(id);
            if (highscore == null)
            {
                return HttpNotFound();
            }
            return View(highscore);
        }

        // POST: Highscores5/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Highscore highscore = db.Highscores.Find(id);
            db.Highscores.Remove(highscore);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
