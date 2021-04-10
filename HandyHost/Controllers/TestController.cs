using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HandyHost.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        private ILogger<TestController> Logger { get; }

        public TestController(ILogger<TestController> logger)
        {
            System.Console.WriteLine("Controller Start");
            Logger = logger;
        }

        [HttpGet]
        public IActionResult Method()
        {
            System.Console.WriteLine("Hello");
            return Ok($"Hello");
        }
    }
}
