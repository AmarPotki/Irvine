using MediatR;
namespace Irvine.Candidate.WebSPA.Application.Commands{
    public class AddProviderCommand : IRequest<bool>{
        public AddProviderCommand(string name, string identityGuid){
            Name = name;
            IdentityGuid = identityGuid;
        }
        public string Name { get;private set; }
        public string IdentityGuid { get;private set; }
    }
}