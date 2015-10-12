using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace _5_irad.Models
{
    public class Highscore
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Wins { get; set; }
        public int Points { get; set; }
    }

    public class HighscoreDBContext : DbContext
    {
        public DbSet<Highscore> Highscores { get; set; }
    }
}