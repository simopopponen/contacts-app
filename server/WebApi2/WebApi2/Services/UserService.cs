
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

        public User FindUserByUsername(string username)
        {
            return _userRepository.FindByUsername(username);
        }

        public User FindUserByUsernameAndPassword(string username, string password)
        {
            return _userRepository.FindByUsernameAndPassword(username, password);
        }
    }
}
