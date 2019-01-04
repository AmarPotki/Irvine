using Irvine.SeedWork.Domain;

namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate
{
    public class Experience:Entity{
        public int _typeId { get; private set; }
        public ExperienceType Type { get; private set; }
        public int Years { get; private set; }

        public Experience() { }

        public Experience(ExperienceType type, int years)
        {
            _typeId = type.Id;
            Years = years;
        }
    }
}