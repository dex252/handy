using HandyHost.Enums;
using HandyHost.Models;
using Microsoft.AspNetCore.Mvc;

namespace HandyHost.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index(bool auth = false)
        {
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
