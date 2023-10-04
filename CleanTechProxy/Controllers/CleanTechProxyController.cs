using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace WebApplication1.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class CleanTechProxyController : ControllerBase
    {
        private const int _httpClientTimeout = 2;
        private const string _errorMessage = "Failed to fetch data!";

        private readonly IHttpClientFactory _httpClientFactory;

        public CleanTechProxyController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<JsonResult> GetCleanTechSourcesData()
        {
            try
            {
                var windmillData = await ProxyRequest($"Windmill");
                var solarPanelData = await ProxyRequest($"SolarPanel");

                return new JsonResult(new { windmillData, solarPanelData });
            }
            catch
            {
                return new JsonResult(new { error = _errorMessage })
                {
                    StatusCode = 500
                };
            }
        }

//šis jāizdzēš kad tiks noņemts Swagger api debugger
        [HttpGet("proxy")]
        public async Task<JsonResult> ProxyRequest(string path)
        {
            try
            {
                var httpClient = _httpClientFactory.CreateClient("cleanTechServer");
                httpClient.Timeout = TimeSpan.FromSeconds(_httpClientTimeout);
                var response = await httpClient.GetAsync(path);

                if (response.IsSuccessStatusCode)
                {
                    var jsonString = await response.Content.ReadAsStringAsync();
                    var json = JsonDocument.Parse(jsonString);
                    return new JsonResult(json)
                    {
                        StatusCode = 200
                    };
                }
                else
                {
                    return new JsonResult(new { error = _errorMessage })
                    {
                        StatusCode = (int)response.StatusCode
                    };
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}