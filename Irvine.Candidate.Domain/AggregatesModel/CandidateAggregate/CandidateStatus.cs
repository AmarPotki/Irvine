using Irvine.SeedWork.Domain;

namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate
{
    public class CandidateStatus : Enumeration
    {
        public static CandidateStatus Free = new CandidateStatus(1, nameof(Free).ToLowerInvariant());
        public static CandidateStatus SelectedForJob = new CandidateStatus(2, nameof(SelectedForJob).ToLowerInvariant());
        public static CandidateStatus AcceptedJob = new CandidateStatus(3, nameof(AcceptedJob).ToLowerInvariant());

        protected CandidateStatus() { }
        public CandidateStatus(int id, string name) : base(id, name){}
    }
}