using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace HandyHost.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        private ILogger<TestController> Logger { get; }

        public TestController(ILogger<TestController> logger)
        {
            Logger = logger;
        }

        [HttpGet]
        public IActionResult Method()
        {
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();
            var browser = HttpContext.Request.Headers["User-Agent"].ToString();
            var path = HttpContext.Request.Path.ToString();

            Console.WriteLine($"{ip}: {browser}");
            Console.WriteLine($"Path: {path}");
            return Ok($"Hello");
        }
    }
}
