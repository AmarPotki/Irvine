using System;
using System.Threading.Tasks;
using BuildingBlocks.Infrastructure.Services.Commands;
using MediatR;
using Irvine.Candidate.WebSPA.Application.Commands;
using Irvine.Candidate.WebSPA.Application.IntegrationEvents.Events;
using Irvine.BuildingBlocks.EventBus.Abstractions;
namespace Irvine.Candidate.WebSPA.Application.IntegrationEvents.EventHandling{
    public class ProviderCreatedIntegrationEventHandler : IIntegrationEventHandler<ProviderCreatedIntegrationEvent>
    {
        private readonly IMediator _mediator;

        public ProviderCreatedIntegrationEventHandler(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        public async Task Handle(ProviderCreatedIntegrationEvent eventMessage)
        {
            var provider = new AddProviderCommand(eventMessage.Name,eventMessage.IdentityGuid);
            var identifiedRequest = new IdentifiedCommand<AddProviderCommand, bool>(provider, eventMessage.RequestId);
            await _mediator.Send(identifiedRequest);
        }
    }
}