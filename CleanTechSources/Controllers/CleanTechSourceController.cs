using Microsoft.AspNetCore.Mvc;

namespace CleanTechSources.Controllers
{

    public class CleanTechSourceController : Controller
    {
        protected string type;
        protected string id;
        protected string location;

        public CleanTechSourceController(string type, string id, string location)
        {
            this.type = type;
            this.id = id;
            this.location = location;
        }

        public virtual JsonResult GetData()
        {
            Random random = new Random();

            var power = random.Next(0, 100);
            var temperature = random.Next(0, 30);

            return new JsonResult(new { type, id, location, power, temperature });
        }
    }
}
