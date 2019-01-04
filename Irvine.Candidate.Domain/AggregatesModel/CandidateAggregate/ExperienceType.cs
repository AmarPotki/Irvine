using Irvine.SeedWork.Domain;

namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate
{
    public class ExperienceType : Enumeration
    {
        public static ExperienceType MedicalDevice = new ExperienceType(1, nameof(MedicalDevice));
        public static ExperienceType ManufacturingEngineer = new ExperienceType(2, nameof(ManufacturingEngineer));
        public static ExperienceType QualityEngineer = new ExperienceType(3, nameof(QualityEngineer));
        public static ExperienceType ValidationEngineer = new ExperienceType(4, nameof(ValidationEngineer));

        protected ExperienceType() { }

        public ExperienceType(int id, string name) : base(id, name) { }
    }
}