using System.Runtime.Serialization;
namespace Irvine.Candidate.WebSPA.Application.Dtos{
    public class SkillDto{
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public int Id { get; set; }
    }
}