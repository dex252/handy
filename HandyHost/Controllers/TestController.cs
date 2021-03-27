using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HandyHost.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private ILogger<TestController> Logger { get; }

        public TestController(ILogger<TestController> logger)
        {
            Logger = logger;
        }

        [HttpGet("hello/{name}")]
        public IActionResult Method(string name)
        {
            System.Console.WriteLine("Hello man");
            return Ok($"Hello, {name}!");
        }
    }
}
