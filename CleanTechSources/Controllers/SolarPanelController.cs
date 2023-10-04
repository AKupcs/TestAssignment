using Microsoft.AspNetCore.Mvc;

namespace CleanTechSources.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SolarPanelController : CleanTechSourceController
    {
        public SolarPanelController() : base("solarPanel", "lausanne_34", "lausanne") { }

        [HttpGet]
        public override JsonResult GetData() => base.GetData();
    }
}
