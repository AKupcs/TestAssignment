using Microsoft.AspNetCore.Mvc;

namespace CleanTechSources.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WindmillController : CleanTechSourceController
    {
        public WindmillController() : base("windmill", "riga_15", "riga") { }

        [HttpGet]
        public override JsonResult GetData() => base.GetData();
    }
}
