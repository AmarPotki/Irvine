using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using MediatR;
using Irvine.Candidate.WebSPA.Application.Dtos;
namespace Irvine.Candidate.WebSPA.Application.Commands{
    public class AddNewCandidateCommand : IRequest<bool>{
        public AddNewCandidateCommand(string name, string lastName, string imageUrl, string resumeUrl,
            string lookingForNext, DateTimeOffset? startTime, DateTimeOffset? prescreeningLastVerified, int locationId,
            int medicalDevice, int manufacturingEngineer, int qualityEngineer, int validationEngineer,List<SkillDto> skillDtos){
            Name = name;
            LastName = lastName;
            ImageUrl = imageUrl;
            ResumeUrl = resumeUrl;
            LookingForNext = lookingForNext;
            StartTime = startTime;
            PrescreeningLastVerified = prescreeningLastVerified;
            LocationId = locationId;
            MedicalDevice = medicalDevice;
            ManufacturingEngineer = manufacturingEngineer;
            QualityEngineer = qualityEngineer;
            ValidationEngineer = validationEngineer;
            SkillDtos = skillDtos;
        }
        //  public string IdentityGuid { get; }
        [DataMember]
        public string Name { get; }
        [DataMember]
        public string LastName { get; }
        [DataMember]
        public string ImageUrl { get; }
        [DataMember]
        public string ResumeUrl { get; }
        [DataMember]
        public string LookingForNext { get; }
        [DataMember]
        public DateTimeOffset? StartTime { get; }
        [DataMember]
        public DateTimeOffset? PrescreeningLastVerified { get; }
        [DataMember]
        public int LocationId { get; }
        //exprience
        [DataMember]
        public int MedicalDevice { get; }
        [DataMember]
        public int ManufacturingEngineer { get; }
        [DataMember]
        public int QualityEngineer { get; }
        [DataMember]
        public int ValidationEngineer { get; }
        //skill
        [DataMember]
        public List<SkillDto> SkillDtos { get;private set; }
        //rate
        [DataMember]
        public int MinimumRate { get; set; }
        [DataMember]
        public int MaximumRate { get; set; }

    }
}