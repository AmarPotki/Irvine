using Irvine.SeedWork.Domain;
namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate{
    public class Location:Entity{
        public string State { get; private set; }
        public string County { get; private set; }
        public string City { get; private set; }

        public Location() { }

        public Location(string state, string county, string city)
        {
            State = state;
            County = county;
            City = city;
        }

    }
}