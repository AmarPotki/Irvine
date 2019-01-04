using System;
using Irvine.BuildingBlocks.EventBus.Events;
namespace Irvine.Candidate.WebSPA.Application.IntegrationEvents.Events{
    public class ClientCreatedIntegrationEvent : IntegrationEvent
    {
        public string Name { get; private set; }
        public string IdentityGuid { get; private set; }
        public Guid RequestId { get; private set; }

        public ClientCreatedIntegrationEvent(string name, string identityGuid, Guid requestId){

            RequestId = requestId;
            Name = name;
            IdentityGuid = identityGuid;
        }
    }
}