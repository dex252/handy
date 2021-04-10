using HandyHost.Enums;
using HandyHost.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HandyHost.Controllers
{
    public class HomeController : Controller
    {
        private ILogger<HomeController> Log { get; }
        public HomeController(ILogger<HomeController> log)
        {
            Log = log;
        }
        public IActionResult Index(bool auth = false)
        {
            Log.LogInformation("This is a test");
            return View("~/Views/Pages/Home/Index.cshtml", auth);
        }

        [HttpPost]
        public JsonResponse<RenderModel> GetRenderAjax()
        {
            var renderModel = new RenderModel() { Code = "1", Text = "Texter" };
            return new JsonResponse<RenderModel>(MessageStatus.ok, "Тестовый ajax", renderModel);
        }

    }
}
