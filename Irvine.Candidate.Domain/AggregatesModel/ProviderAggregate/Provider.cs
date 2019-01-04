using Irvine.SeedWork.Domain;
namespace Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate{
    public class Provider:Entity,IAggregateRoot{
        public Provider(){
            
        }
        public Provider(string name, string identityGuid)
        {
            Name = name;
            IdentityGuid = identityGuid;
        }
        public string IdentityGuid { get; private set; }
        public string Name { get;private set; }
    }
}