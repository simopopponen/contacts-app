
using WebApi2.Model;
using WebApi2.Repository;

namespace WebApi2.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        public User FindByUsername(string username)
        {
            return _userRepository.FindByUsername(username);
        }

        public User FindByUsernameAndPassword(string username, string password)
        {
            return _userRepository.FindByUsernameAndPassword(username, password);
        }
    }
}
