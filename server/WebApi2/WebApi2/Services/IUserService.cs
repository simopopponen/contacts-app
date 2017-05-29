
using WebApi2.Model;

namespace WebApi2.Services
{
    public interface IUserService
    {
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
    }
}
