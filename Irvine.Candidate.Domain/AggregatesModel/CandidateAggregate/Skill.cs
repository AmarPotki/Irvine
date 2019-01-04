using System.Collections.Generic;
using System.Linq;
using Irvine.SeedWork.Domain;
namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate{
    public class Skill:Entity{
        public Skill(string name){
            Name = name;
        }
        public string Name { get;private set; }
        private ICollection<CandidateSkill> CandidateSkills { get; } = new List<CandidateSkill>();
        public IEnumerable<Candidate> Candidates => CandidateSkills.Select(e => e.Candidate);
    }
}