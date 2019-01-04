using Irvine.SeedWork.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate{
    public class Candidate : Entity, IAggregateRoot{
        private readonly List<Experience> _experiences;
        private int _candidateStatusId;
        private int? _locationId;
        private int _providerId;
        protected Candidate(){
            _experiences = new List<Experience>();
        }
        public Candidate(string name, string lastName, int providerId){
            _experiences = new List<Experience>();
            Name = name;
            LastName = lastName;
            _providerId = providerId;
            _candidateStatusId = CandidateStatus.Free.Id;
        }
        public Candidate(string name, string lastName, int providerId, string imageUrl, string resumeUrl,
            string lookingForNext, DateTimeOffset startTime, int locationId){
            Name = !string.IsNullOrEmpty(name) ? name : throw new ArgumentNullException(nameof(name));
            LastName = lastName;
            ImageUrl = imageUrl;
            ResumeUrl = resumeUrl;
            LookingForNext = lookingForNext;
            StartTime = startTime;
            // todo: check this situation
            _providerId = providerId != 0 ? providerId : throw new ArgumentNullException(nameof(name));
            _locationId = locationId;
            _experiences = new List<Experience>();
            CandidateSkills = new List<CandidateSkill>();
        }
        // we don't need it anymore
       // public string IdentityGuid { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }
        public string ImageUrl { get; private set; }
        public string ResumeUrl { get; private set; }
        public string LookingForNext { get; private set; }
        public DateTimeOffset? StartTime { get; private set; }
        public DateTimeOffset? PrescreeningLastVerified { get; private set; }
        public Location Location { get; private set; }
        public Rate Rate { get; private set; }
        public IReadOnlyCollection<Experience> Experiences => _experiences;
        public CandidateStatus CandidateStatus { get; private set; }
        public ICollection<CandidateSkill> CandidateSkills { get; set; }
        public IEnumerable<Skill> Skills => CandidateSkills.Select(e => e.Skill);
        public void AddExperience(ExperienceType type, int years){
            if (years <= 0 || years >= 40) throw new DomainException($"Experience years is not valid: {years}");
            if (_experiences.Any(e => e._typeId == type.Id))
                throw new DomainException($"Duplicate Experience: {type.Name}");
            var experience = new Experience(type, years);
            _experiences.Add(experience);
        }
        public void AddSkill(int skillId)
        {
            CandidateSkills.Add(new CandidateSkill {SkillId = skillId, Candidate = this});
        }
        public void SetRate(int minRate, int maxRate)
        {
            if (minRate <= 12 || minRate > 500)
            {
                throw new DomainException($"Minimum rate is not valid: {minRate}");
            }

            if (maxRate <= 12 || maxRate > 500)
            {
                throw new DomainException($"Maximum rate is not valid: {maxRate}");
            }

            if (maxRate <= minRate)
            {
                throw new DomainException($"Maximum rate({maxRate}) should be greater than minimum rate({minRate})");
            }

            var rate = new Rate(minRate,maxRate);
            Rate = rate;
        }
    }
}