using Microsoft.AspNetCore.Mvc;
using WebApi2.Services;
using WebApi2.Config.Communication;
using WebApi2.Config;

namespace WebApi2.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindByUsernameAndPassword(authRequest.Username, authRequest.Password);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    }
}