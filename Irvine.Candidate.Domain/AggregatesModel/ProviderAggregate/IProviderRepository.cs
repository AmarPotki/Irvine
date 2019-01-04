using System.Threading.Tasks;
using Irvine.SeedWork.Domain;
namespace Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate{
    public interface IProviderRepository:IRepository<Provider>{
        Provider Add(Provider provider);
        Task<Provider> FindAsync(string identityGuid);
    }
}