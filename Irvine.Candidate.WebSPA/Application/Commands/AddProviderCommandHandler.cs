using System.Threading;
using System.Threading.Tasks;
using BuildingBlocks.Infrastructure.Services.Commands;
using BuildingBlocks.Infrastructure.Services.Idempotency;
using MediatR;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
namespace Irvine.Candidate.WebSPA.Application.Commands{
    public class AddProviderCommandHandler : IRequestHandler<AddProviderCommand, bool>{
        private readonly IProviderRepository _providerRepository;
        public AddProviderCommandHandler(IProviderRepository providerRepository){
            _providerRepository = providerRepository;
        }
        public async Task<bool> Handle(AddProviderCommand message, CancellationToken cancellationToken){
            var provider = new Provider(message.Name, message.IdentityGuid);
            _providerRepository.Add(provider);
            return await _providerRepository.UnitOfWork.SaveEntitiesAsync();
        }
        public class AddProviderIdentifiedCommandHandler : IdentifierCommandHandler<AddProviderCommand, bool>{
            public AddProviderIdentifiedCommandHandler(IMediator mediator, IRequestManager requestManager,
                Identifier identifier) : base(mediator, requestManager, identifier){ }
            protected override bool CreateResultForDuplicateRequest(){
                return true;
            }
        }
    }
}