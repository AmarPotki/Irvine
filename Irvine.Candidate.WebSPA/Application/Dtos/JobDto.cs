using System;
using System.Runtime.Serialization;

namespace Irvine.Candidate.WebSPA.Application.Dtos
{
    public class JobDto
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DateTimeOffset? DeliveryDate { get; set; }
    }
}