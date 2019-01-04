using System.Threading.Tasks;
using Irvine.BuildingBlocks.EventBus.Events;

namespace Irvine.BuildingBlocks.IntegrationEventLogEF.Services
{
    public interface IDomainIntegrationEventService
    {
        Task PublishThroughEventBusAsync(IntegrationEvent evt);
    }
}