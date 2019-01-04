using System.Collections.Generic;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
using Irvine.SeedWork.Domain;

namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate
{
    public class Rate : ValueObject
    {
        public Rate(int minimumRate, int maximumRate){
            MinimumRate = minimumRate;
            MaximumRate = maximumRate;
        }
        public int MinimumRate { get; private set; }
        public int MaximumRate { get; private set; }

        protected override IEnumerable<object> GetAtomicValues(){
            yield return MinimumRate;
            yield return MaximumRate;
        }
    }
}